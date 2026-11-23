import { bad, getDb, json, uidFrom } from "@/lib/db";

export const dynamic = "force-dynamic";
const KINDS = ["note", "route", "good"] as const;

export async function POST(req: Request) {
  const db = getDb();
  if (!db) return json({ ok: true, persisted: false });
  const uid = uidFrom(req);

  let body: { kind?: string; targetId?: string; on?: boolean };
  try {
    body = await req.json();
  } catch {
    return bad("请求体不是合法 JSON");
  }
  const kind = KINDS.find((k) => k === body.kind);
  if (!kind || typeof body.targetId !== "string" || !body.targetId) return bad("缺少 kind / targetId");

  if (body.on) {
    const { error } = await db
      .from("hd_favorites")
      .upsert({ uid, kind, target_id: body.targetId }, { onConflict: "uid,kind,target_id" });
    if (error) return bad(error.message, 500);
  } else {
    const { error } = await db
      .from("hd_favorites")
      .delete()
      .match({ uid, kind, target_id: body.targetId });
    if (error) return bad(error.message, 500);
  }
  return json({ ok: true, persisted: true });
}
