# 邯道 · 串城街 智慧文旅

以**内容种草**为入口、**路线导览**为骨架、**文化消费**为出口的智慧文旅产品。邯郸串城街历史文化街区，19 个页面全链路可交互（首页 / 探索 / 路线 / 点位 / 地图 / 商城 / 活动 / 购物车 / 结算 / 订单 / 行程 / 收藏 / 我的 / AI 行程助手）。

## 技术栈

| 层 | 选型 | 说明 |
| --- | --- | --- |
| 前端 | Next.js 16（App Router）+ 原生 CSS/JS | 19 页高保真交互界面，沿用设计稿样式，无 UI 框架依赖 |
| 后端 | Next.js Route Handlers（Node Runtime） | 8 个 REST 接口，服务端持有 service_role，浏览器不直连数据库 |
| 数据库 | Supabase（Postgres） | 7 张表：内容层 1 张 + 用户资产 6 张，RLS 全开且无策略 = 只有服务端可读写 |
| 托管 | Netlify（`@netlify/plugin-nextjs`） | 绑定 GitHub `main` 分支，push 自动构建部署 |

## 目录结构

```
.
├── app/
│   ├── layout.tsx          根布局（挂载样式与前端脚本）
│   ├── page.tsx            页面骨架（SSR，渲染手机壳 + 侧栏面板）
│   ├── shell.ts            由 design/shell.html 生成的骨架字符串
│   ├── hd.css              界面样式（设计令牌 / 组件 / 响应式断点）
│   ├── globals.css         最小重置
│   └── api/                后端接口
│       ├── bootstrap/      一次性拉取内容层 + 当前用户资产
│       ├── favorites/      收藏（笔记 / 路线 / 点位 / 好物）
│       ├── trips/          我的行程（加入 / 移除）
│       ├── visits/         打卡足迹
│       ├── orders/         订单（列表 / 创建）
│       ├── points/         积分增减
│       └── events/         埋点事件
├── lib/
│   ├── db.ts               Supabase 客户端 + 匿名 uid 解析
│   ├── content.ts          内容层与用户资产读写（含种子回退）
│   └── seed.json           种子数据（5 路线 / 17 点位 / 7 笔记 / 11 商品 …）
├── public/hd/app.js        前端交互脚本（路由、渲染、事件总线）
├── supabase/setup_all.sql  一键建表 + 灌种子数据
├── design/shell.html       页面骨架原始片段（可读版）
├── scripts/smoke.mjs       上线自检脚本
└── netlify.toml            构建配置
```

## 快速开始

```bash
npm install
cp .env.local.example .env.local   # 填入下面两个变量
npm run dev                        # http://localhost:3000
```

环境变量（本地 `.env.local`、线上 Netlify 各配一份）：

```
SUPABASE_URL=https://<项目ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=sb_secret_xxxxxxxx
```

> 服务端专用，**不要**加 `NEXT_PUBLIC_` 前缀，也不会进浏览器。
> 未配置时站点仍可访问：内容层自动回退到 `lib/seed.json`，收藏/订单等写入静默跳过。

## 数据库初始化

Supabase Dashboard → SQL Editor → New query → 粘贴 `supabase/setup_all.sql` 全文 → Run。
脚本幂等，可重复执行；末尾会输出各 `kind` 的条数用于自检。

## 接口一览

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/api/bootstrap` | 内容层（路线/点位/笔记/商品/专题/场馆）+ 当前 uid 的收藏、行程、足迹、订单、积分 |
| POST | `/api/favorites` | `{kind:'note'\|'route'\|'good', targetId, on}` |
| POST | `/api/trips` | `{routeId, on}` |
| POST | `/api/visits` | `{poiId, on}` |
| GET/POST | `/api/orders` | 订单列表 / 创建（订单号 `HD` + 8 位日期 + 4 位序号） |
| POST | `/api/points` | `{delta}` 或 `{points}` |
| POST | `/api/events` | `{page, evt, extra}` 埋点 |

访客身份：前端首访生成 `hd_uid` 存入 localStorage，通过 `x-hd-uid` 请求头传递；后端按 uid 隔离数据，无需登录。

## 数据结构

内容层统一存 `hd_content(kind, id, ord, data jsonb)`，`data` 即前端渲染所需的完整字段，与 PRD 第 8 节数据模型一致：

```json
{ "kind": "routes", "id": "r1",
  "data": { "id":"r1","t":"串城街主轴 · 三千年一街","km":"3.4 km","spots":5,"pois":["p1","p2"] } }
```

用户资产：`hd_profiles` / `hd_favorites` / `hd_trips` / `hd_visits` / `hd_orders` / `hd_events`。

## 自检

```bash
npm run smoke                 # 默认打本地 3000 端口
npm run smoke -- https://<线上域名>
```

覆盖：内容层加载 → 收藏写入/读回 → 行程 → 打卡 → 下单 → 埋点落库。

## 说明

- 前端界面、文案与交互来自《「邯道」串城街智慧文旅小程序 · 高保真可交互 Demo》，本仓库将其拆为可部署的前后端工程，并把原本的本地 mock 状态接到了真实数据库。
- AI 行程助手目前为前端脚本化演示（按约束生成三段行程），未接入大模型；接入点预留在 `app/api/` 下可新增 `ai/route.ts`，key 走环境变量。
- 购物车为本地会话态（`TMP.cart`），订单提交后才落库——与真实小程序的「加购不上云、下单才写单」一致。
