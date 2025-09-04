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
  title: "VibeCoding（バイブコーディング）教材 | AI時代の新しいプログラミング学習法 - 感覚で学ぶコーディング講座",
  description: "VibeCoding（バイブコーディング）は、AIを活用した革新的なプログラミング教材。感覚的な操作で学べる超実践型のコーディング講座。未経験者でも3ヶ月でWebサイト制作が可能。LINE限定特別価格70,000円で提供中。24時間サポート付き。",
  keywords: "VibeCoding, バイブコーディング, バイブコーディング教材, バイブコーディング学ぶ, AIコーディング, プログラミング教材, プログラミング学習, AI教材, コーディング講座, プログラミング講座, 未経験, 初心者, ChatGPT, Claude, AI開発, Webサイト制作, LP制作, オンライン講座, プログラミングスクール",
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: "VibeCoding（バイブコーディング）教材 | AI時代の新しいプログラミング学習法",
    description: "VibeCoding（バイブコーディング）は、感覚的に学べるAIコーディング教材。未経験者でも3ヶ月でWebサイト制作スキルが身につく。LINE限定特別価格70,000円。",
    url: "https://daredemo-engineer.com",
    siteName: "VibeCoding（バイブコーディング）",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VibeCoding（バイブコーディング）- AI時代の新しいプログラミング教材",
      }
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeCoding（バイブコーディング）教材 | AI時代の新しいプログラミング学習法",
    description: "VibeCoding（バイブコーディング）は、感覚的に学べるAIコーディング教材。未経験者でも3ヶ月でWebサイト制作スキルが身につく。",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "VibeCoding（バイブコーディング）",
    "description": "VibeCoding（バイブコーディング）は、AIを活用した革新的なプログラミング教材。感覚的な操作で学べる超実践型のコーディング講座。",
    "provider": {
      "@type": "Organization",
      "name": "LandBridge",
      "sameAs": "https://daredemo-engineer.com"
    },
    "educationalLevel": "初心者",
    "teaches": ["プログラミング", "AIコーディング", "Webサイト制作", "ChatGPT", "Claude"],
    "inLanguage": "ja",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "オンライン",
      "duration": "P3M",
      "offers": {
        "@type": "Offer",
        "price": "70000",
        "priceCurrency": "JPY",
        "availability": "https://schema.org/InStock"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "受講生A"
        },
        "reviewBody": "VibeCodingのおかげで、プログラミング未経験の私でもWebサイトが作れるようになりました。"
      }
    ]
  };

  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable} ${lato.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-secondary-800 antialiased cursor-none">{children}</body>
    </html>
  );
}