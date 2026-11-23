import { bad, getDb, json, uidFrom } from "@/lib/db";

export const dynamic = "force-dynamic";

/** 积分增减（AI 行程采纳 +10 等），落库到 hd_profiles。 */
export async function POST(req: Request) {
  const db = getDb();
  if (!db) return json({ ok: true, persisted: false });
  const uid = uidFrom(req);

  let body: { delta?: number; points?: number };
  try {
    body = await req.json();
  } catch {
    return bad("请求体不是合法 JSON");
  }

  const { data } = await db.from("hd_profiles").select("points").eq("uid", uid).maybeSingle();
  const current = typeof data?.points === "number" ? data.points : 320;
  const next =
    typeof body.points === "number"
      ? Math.max(0, Math.round(body.points))
      : Math.max(0, current + Math.round(Number(body.delta) || 0));

  const { error } = await db
    .from("hd_profiles")
    .upsert({ uid, points: next, last_seen: new Date().toISOString() }, { onConflict: "uid" });
  if (error) return bad(error.message, 500);
  return json({ ok: true, persisted: true, points: next });
}
