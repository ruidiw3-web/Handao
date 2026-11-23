# 部署手册

## 0. 前置：数据库

Supabase → SQL Editor → New query → 粘贴 `supabase/setup_all.sql` 全文 → Run。
成功标志：最后一条查询返回各 `kind` 的条数（routes 5 / pois 17 / notes 7 / products 11 …）。

## 1. 环境变量

Netlify 站点配置里需两项（本地写 `.env.local`，均已被 `.gitignore` 排除）：

```
SUPABASE_URL=https://<项目ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=sb_secret_xxxxxxxx
```

取值：Supabase → Settings → Data API（URL）、API Keys（Secret key）。

## 2. 推 GitHub

```bash
git init
git add -A
git commit -m "init: 邯道智慧文旅（Next.js + Supabase）"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

## 3. Netlify 导入

1. app.netlify.com → Add new site → **Import an existing project** → GitHub → 选仓库
2. 构建配置自动读取 `netlify.toml`（`npm run build` / publish `.next` / Node 22）
3. 展开 **Environment variables**，加 `SUPABASE_URL`、`SUPABASE_SERVICE_ROLE_KEY`
4. Deploy

## 4. 上线后必查

| # | 检查项 | 期望 |
| --- | --- | --- |
| 1 | 打开首页 | 手机壳界面出现，左侧数据面板全 0 |
| 2 | 路线详情 → 加入我的行程 | Toast 提示，左侧「我的行程」+1 |
| 3 | 刷新页面 | 行程仍在（说明写进了数据库） |
| 4 | 商城 → 加购 → 提交订单 | 生成 `HD…` 订单号，我的订单出现该笔 |
| 5 | Supabase Table Editor | `hd_trips` / `hd_orders` / `hd_events` 有数据 |

失败排查：Netlify → Deploys → 最新 → Functions log。最常见是环境变量漏配或值带了引号/空格。

> ⚠️ Netlify 新站点默认开启 **Edge Access（站点私有）**，外网访问会 401。
> 需在 Site configuration → Access & security 关掉，或调 API
> `PATCH /api/v1/sites/{id}` body `{"sso_login":false}`。
