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
  metadataBase: new URL('https://daredemo-engineer.com'),
  title: "誰でもエンジニア | 超実践型AIコーディング講座 - 感覚で指示を出すだけでWebサイトが作れる",
  description: "AIコーディングで誰でもエンジニアになれる時代。従来のプログラミング学習とは違い、感覚的な指示でホームページやLPが作れる超実践型講座。HP・LP制作講座が今だけ20,000円（通常30,000円）。",
  keywords: "AIコーディング, プログラミング学習, エンジニア, 未経験, ノーコード, ChatGPT, Claude, AI開発, Webサイト制作, LP制作, オンライン講座",
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: "誰でもエンジニア | 超実践型AIコーディング講座",
    description: "感覚で指示を出すだけでWebサイトが作れる。AIコーディングで誰でもエンジニアになれる超実践型講座。リリース記念特別価格実施中！",
    url: "https://daredemo-engineer.com",
    siteName: "誰でもエンジニア",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "誰でもエンジニア - 超実践型AIコーディング講座",
      }
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "誰でもエンジニア | 超実践型AIコーディング講座",
    description: "感覚で指示を出すだけでWebサイトが作れる。AIコーディングで誰でもエンジニアになれる超実践型講座。",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-verification-code",
  },
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