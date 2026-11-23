#!/usr/bin/env node
/**
 * 上线自检：内容层 → 收藏 → 行程 → 打卡 → 下单 → 埋点
 * 用法： node scripts/smoke.mjs [baseUrl]
 */
const base = process.argv[2] || "http://localhost:3000";
const uid = "smoke_" + Math.random().toString(36).slice(2, 10);

const call = async (path, body) => {
  const res = await fetch(base + "/api" + path, {
    method: body ? "POST" : "GET",
    headers: { "x-hd-uid": uid, ...(body ? { "content-type": "application/json" } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`${path} 非 JSON 响应（${res.status}）: ${text.slice(0, 120)}`);
  }
  if (!res.ok || data.ok === false) throw new Error(`${path} 失败（${res.status}）: ${data.error || text.slice(0, 120)}`);
  return data;
};

const step = async (name, fn) => {
  try {
    const info = await fn();
    console.log(`  ✅ ${name}${info ? " · " + info : ""}`);
    return true;
  } catch (e) {
    console.log(`  ❌ ${name} · ${e.message}`);
    return false;
  }
};

const main = async () => {
  console.log(`\n邯道 · 上线自检  →  ${base}  (uid=${uid})\n`);
  let ok = 0;
  let total = 0;

  const boot = await step("内容层 /api/bootstrap", async () => {
    const d = await call("/bootstrap");
    const c = d.content;
    if (!c || !c.routes?.length) throw new Error("内容层为空");
    return `${c.routes.length} 路线 / ${c.pois.length} 点位 / ${c.notes.length} 笔记 / ${c.products.length} 商品 · 来源 ${d.source}`;
  });
  total++;
  if (boot) ok++;
  else process.exit(1);

  const d1 = await call("/bootstrap");
  const noteId = d1.content.notes[0].id;
  const routeId = d1.content.routes[0].id;
  const poiId = d1.content.pois[0].id;
  const goods = d1.content.products.find((p) => p.cat !== "act") || d1.content.products[0];

  total++; if (await step("收藏写入", async () => { await call("/favorites", { kind: "note", targetId: noteId, on: true }); return noteId; })) ok++;
  total++; if (await step("收藏读回", async () => {
    const d = await call("/bootstrap");
    if (!d.profile.favNotes.includes(noteId)) throw new Error("读回缺失");
    return `${d.profile.favNotes.length} 条`;
  })) ok++;

  total++; if (await step("行程写入", async () => { await call("/trips", { routeId, on: true }); return routeId; })) ok++;
  total++; if (await step("打卡写入", async () => { await call("/visits", { poiId, on: true }); return poiId; })) ok++;

  total++; if (await step("下单", async () => {
    const no = "HD" + new Date().toISOString().slice(0, 10).replace(/-/g, "") + String(Math.floor(Math.random() * 9000 + 1000));
    await call("/orders", {
      no,
      items: [{ gid: goods.id, qty: 1 }],
      qty: 1,
      amount: goods.price,
      st: "sent",
      time: new Date().toISOString().slice(0, 16).replace("T", " "),
      points: 300,
    });
    const d = await call("/orders");
    if (!d.orders.some((o) => o.no === no)) throw new Error("订单未读回");
    return no;
  })) ok++;

  total++; if (await step("埋点", async () => { await call("/events", { page: "自检", evt: "smoke", extra: base }); return "ok"; })) ok++;

  console.log(`\n结果：${ok}/${total} 通过\n`);
  process.exit(ok === total ? 0 : 1);
};

main().catch((e) => {
  console.error("自检异常：", e.message);
  process.exit(1);
});
