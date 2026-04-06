import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "昱保消防工程行 — 消防安檢・改善工程・器材買賣",
  description:
    "昱保消防工程行位於基隆市，提供消防安全設備檢修、安裝工程、改善工程及消防器材買賣服務。超過二十年專業經驗，守護您的安全。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
