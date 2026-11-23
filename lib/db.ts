import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

let cached: SupabaseClient | null | undefined;

/** 服务端专用客户端（service_role，绕过 RLS）。未配置环境变量时返回 null，接口自动回落到内置种子数据。 */
export function getDb(): SupabaseClient | null {
  if (cached !== undefined) return cached;
  cached = url && key ? createClient(url, key, { auth: { persistSession: false } }) : null;
  return cached;
}

/** 匿名访客标识：前端 localStorage 生成，仅用于隔离各自的收藏/行程/订单。 */
export function uidFrom(req: Request): string {
  const raw = req.headers.get("x-hd-uid") || "";
  return /^[A-Za-z0-9_-]{3,64}$/.test(raw) ? raw : "anon";
}

export function json(data: unknown, init?: number) {
  return new Response(JSON.stringify(data), {
    status: init ?? 200,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

export function bad(message: string, status = 400) {
  return json({ ok: false, error: message }, status);
}
