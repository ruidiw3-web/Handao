import { bad, getDb, json, uidFrom } from "@/lib/db";

export const dynamic = "force-dynamic";

/** 埋点采集：页面 PV、加购、下单等事件落 hd_events，对应 PRD 第 9 节的漏斗口径。 */
export async function POST(req: Request) {
  const db = getDb();
  if (!db) return json({ ok: true, persisted: false });
  const uid = uidFrom(req);

  let body: { page?: string; evt?: string; extra?: string };
  try {
    body = await req.json();
  } catch {
    return bad("请求体不是合法 JSON");
  }

  const trim = (v: unknown, n: number) => (typeof v === "string" ? v.slice(0, n) : "");

  const { error } = await db.from("hd_events").insert({
    uid,
    page: trim(body.page, 40),
    evt: trim(body.evt, 60),
    extra: trim(body.extra, 200),
  });
  if (error) return bad(error.message, 500);
  return json({ ok: true, persisted: true });
}
