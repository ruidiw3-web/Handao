import type { SupabaseClient } from "@supabase/supabase-js";
import seed from "./seed.json";

export type Content = {
  user: Record<string, unknown>;
  banners: unknown[];
  entries: unknown[];
  themes: unknown[];
  routes: unknown[];
  pois: unknown[];
  notes: unknown[];
  topics: unknown[];
  products: unknown[];
  activities: unknown[];
  venues: unknown[];
  services: unknown[];
};

export const CONTENT_KINDS = [
  "banners",
  "entries",
  "themes",
  "routes",
  "pois",
  "notes",
  "topics",
  "products",
  "activities",
  "venues",
  "services",
] as const;

export function seedContent(): Content {
  return {
    user: seed.USER as Record<string, unknown>,
    banners: seed.BANNERS,
    entries: seed.ENTRIES,
    themes: seed.THEMES,
    routes: seed.ROUTES,
    pois: seed.POIS,
    notes: seed.NOTES,
    topics: seed.TOPICS,
    products: seed.PRODUCTS,
    activities: seed.ACTIVITIES,
    venues: seed.VENUES,
    services: seed.SERVICES,
  };
}

/** 内容层：优先读 hd_content 表；表不存在或为空时回落到内置种子数据，保证站点始终可用。 */
export async function loadContent(db: SupabaseClient | null): Promise<{ content: Content; source: "db" | "seed" }> {
  const fallback = seedContent();
  if (!db) return { content: fallback, source: "seed" };

  const { data, error } = await db.from("hd_content").select("kind,id,ord,data").order("ord", { ascending: true });
  if (error || !data || data.length === 0) return { content: fallback, source: "seed" };

  const out: Content = {
    user: fallback.user,
    banners: [],
    entries: [],
    themes: [],
    routes: [],
    pois: [],
    notes: [],
    topics: [],
    products: [],
    activities: [],
    venues: [],
    services: [],
  };
  for (const row of data as { kind: string; data: unknown }[]) {
    if (row.kind === "user") out.user = row.data as Record<string, unknown>;
    else if (row.kind in out && Array.isArray((out as never as Record<string, unknown[]>)[row.kind])) {
      (out as never as Record<string, unknown[]>)[row.kind].push(row.data);
    }
  }
  for (const k of CONTENT_KINDS) {
    if ((out[k] as unknown[]).length === 0) (out as never as Record<string, unknown[]>)[k] = fallback[k];
  }
  return { content: out, source: "db" };
}

export type Profile = {
  points: number;
  favNotes: string[];
  favRoutes: string[];
  favGoods: string[];
  trips: string[];
  visited: string[];
  orders: {
    no: string;
    items: { gid: string; qty: number }[];
    qty: number;
    amount: number;
    st: string;
    time: string;
  }[];
};

export const EMPTY_PROFILE: Profile = {
  points: 320,
  favNotes: [],
  favRoutes: [],
  favGoods: [],
  trips: [],
  visited: [],
  orders: [],
};

/** 用户资产：收藏 / 行程 / 打卡 / 订单 / 积分，按 uid 隔离。 */
export async function loadProfile(db: SupabaseClient | null, uid: string): Promise<Profile> {
  if (!db) return { ...EMPTY_PROFILE };
  const p: Profile = { ...EMPTY_PROFILE };

  const [prof, favs, trips, visits, orders] = await Promise.all([
    db.from("hd_profiles").select("points").eq("uid", uid).maybeSingle(),
    db.from("hd_favorites").select("kind,target_id").eq("uid", uid).order("created_at", { ascending: false }),
    db.from("hd_trips").select("route_id").eq("uid", uid).order("created_at", { ascending: true }),
    db.from("hd_visits").select("poi_id").eq("uid", uid).order("created_at", { ascending: true }),
    db
      .from("hd_orders")
      .select("no,items,qty,amount,st,time")
      .eq("uid", uid)
      .order("created_at", { ascending: false })
      .limit(50),
  ]);

  if (prof.data && typeof prof.data.points === "number") p.points = prof.data.points;
  for (const f of (favs.data || []) as { kind: string; target_id: string }[]) {
    if (f.kind === "note") p.favNotes.push(f.target_id);
    else if (f.kind === "good") p.favGoods.push(f.target_id);
    else p.favRoutes.push(f.target_id);
  }
  p.trips = ((trips.data || []) as { route_id: string }[]).map((r) => r.route_id);
  p.visited = ((visits.data || []) as { poi_id: string }[]).map((r) => r.poi_id);
  p.orders = ((orders.data || []) as Profile["orders"]).map((o) => ({
    no: o.no,
    items: o.items || [],
    qty: o.qty,
    amount: o.amount,
    st: o.st,
    time: o.time,
  }));
  return p;
}

export async function touchProfile(db: SupabaseClient, uid: string) {
  await db.from("hd_profiles").upsert({ uid, last_seen: new Date().toISOString() }, { onConflict: "uid" });
}
