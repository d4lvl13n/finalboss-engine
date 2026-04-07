import type { Metadata } from "next";
import { Inter, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "FinalBoss Engine — Autonomous Content That Thinks Before It Writes",
  description: "From trending topic to published article, fully autonomous. Research, writing, formatting, and publishing — handled for you. Every claim sourced and verified.",
  openGraph: {
    title: "FinalBoss Engine — Autonomous Content That Thinks Before It Writes",
    description: "From trending topic to published article, fully autonomous. Every claim sourced and verified.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
