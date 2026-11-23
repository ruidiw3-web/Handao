import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./hd.css";

export const metadata: Metadata = {
  title: "「邯道 · 串城街」智慧文旅",
  description:
    "以内容种草为入口、路线导览为骨架、文化消费为出口的智慧文旅产品。邯郸串城街历史文化街区，19 个页面全链路可交互。",
  keywords: ["邯郸", "串城街", "智慧文旅", "City Walk", "非遗", "小程序"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8E3B2C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <script src="/hd/app.js" defer />
      </body>
    </html>
  );
}
