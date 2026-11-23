import { bad, getDb, json, uidFrom } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const db = getDb();
  if (!db) return json({ ok: true, orders: [] });
  const uid = uidFrom(req);
  const { data, error } = await db
    .from("hd_orders")
    .select("no,items,qty,amount,st,time")
    .eq("uid", uid)
    .order("created_at", { ascending: false })
    .limit(50);
  if (error) return bad(error.message, 500);
  return json({ ok: true, orders: data || [] });
}

export async function POST(req: Request) {
  const db = getDb();
  if (!db) return json({ ok: true, persisted: false });
  const uid = uidFrom(req);

  let body: {
    no?: string;
    items?: { gid: string; qty: number }[];
    qty?: number;
    amount?: number;
    st?: string;
    time?: string;
    points?: number;
  };
  try {
    body = await req.json();
  } catch {
    return bad("请求体不是合法 JSON");
  }

  if (typeof body.no !== "string" || !/^HD\d{8,}$/.test(body.no)) return bad("订单号不合法");
  if (!Array.isArray(body.items) || body.items.length === 0) return bad("订单行不能为空");
  if (typeof body.amount !== "number" || !Number.isFinite(body.amount)) return bad("金额不合法");

  const st = ["unpaid", "sent", "used", "done"].includes(String(body.st)) ? String(body.st) : "sent";

  const { error } = await db.from("hd_orders").upsert(
    {
      no: body.no,
      uid,
      items: body.items,
      qty: Math.max(1, Number(body.qty) || 1),
      amount: body.amount,
      st,
      time: body.time || "",
    },
    { onConflict: "no" },
  );
  if (error) return bad(error.message, 500);

  if (typeof body.points === "number" && Number.isFinite(body.points)) {
    await db.from("hd_profiles").upsert(
      { uid, points: Math.max(0, Math.round(body.points)), last_seen: new Date().toISOString() },
      { onConflict: "uid" },
    );
  }

  return json({ ok: true, persisted: true, no: body.no });
}
