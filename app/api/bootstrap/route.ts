import { getDb, json, uidFrom } from "@/lib/db";
import { loadContent, loadProfile, touchProfile } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const db = getDb();
  const uid = uidFrom(req);
  const [{ content, source }, profile] = await Promise.all([loadContent(db), loadProfile(db, uid)]);
  if (db) void touchProfile(db, uid).catch(() => {});
  return json({ ok: true, source, content, profile });
}
