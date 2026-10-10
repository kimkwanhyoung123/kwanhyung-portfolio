import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "김관형 | Kwan Hyoung Kim — Security Portfolio";
const description =
  "소프트웨어를 만들어 본 시선으로 취약점을 찾는 김관형의 보안 포트폴리오 — 모의해킹·취약점 진단, MetaMask 버그바운티(HackerOne), CTF.";

export const metadata: Metadata = {
  // Absolute base used to resolve the OG image URL below. Defaults to the
  // production domain so share previews work even when the env var is unset.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://kwanhyung-portfolio.vercel.app",
  ),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/images/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "김관형 보안 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
