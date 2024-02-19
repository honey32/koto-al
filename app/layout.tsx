import type { Metadata } from "next";
import "./globals.css";
import { type FC, type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Koto-al",
  description: "そこそこ見られてる技術記事を探せる検索サイトです。",
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
