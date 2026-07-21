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

const title = "김관형 | Kwan Hyung Kim — Forward Deployed Engineer";
const description =
  "복잡한 현장 문제를 실제로 동작하는 소프트웨어로 전환하는 Forward Deployed Engineer, 김관형의 포트폴리오입니다.";

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
        alt: "김관형 포트폴리오",
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
