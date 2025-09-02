import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Lato, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({ 
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: 'swap',
});

const lato = Lato({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "誰でもエンジニア | AIを活用した新しい学習プラットフォーム",
  description: "AIツールを活用して、未経験から3ヶ月でエンジニアを目指す。動画講座とライブ配信で実践的なスキルを習得。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable} ${lato.variable} ${openSans.variable}`}>
      <body className="font-sans text-secondary-800 antialiased cursor-none">{children}</body>
    </html>
  );
}