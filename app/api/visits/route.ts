import { bad, getDb, json, uidFrom } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const db = getDb();
  if (!db) return json({ ok: true, persisted: false });
  const uid = uidFrom(req);

  let body: { poiId?: string; on?: boolean };
  try {
    body = await req.json();
  } catch {
    return bad("请求体不是合法 JSON");
  }
  if (typeof body.poiId !== "string" || !body.poiId) return bad("缺少 poiId");

  const { error } = body.on
    ? await db.from("hd_visits").upsert({ uid, poi_id: body.poiId }, { onConflict: "uid,poi_id" })
    : await db.from("hd_visits").delete().match({ uid, poi_id: body.poiId });

  if (error) return bad(error.message, 500);
  return json({ ok: true, persisted: true });
}
