import { bad, getDb, json, uidFrom } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const db = getDb();
  if (!db) return json({ ok: true, persisted: false });
  const uid = uidFrom(req);

  let body: { routeId?: string; on?: boolean };
  try {
    body = await req.json();
  } catch {
    return bad("请求体不是合法 JSON");
  }
  if (typeof body.routeId !== "string" || !body.routeId) return bad("缺少 routeId");

  const { error } = body.on
    ? await db.from("hd_trips").upsert({ uid, route_id: body.routeId }, { onConflict: "uid,route_id" })
    : await db.from("hd_trips").delete().match({ uid, route_id: body.routeId });

  if (error) return bad(error.message, 500);
  return json({ ok: true, persisted: true });
}
