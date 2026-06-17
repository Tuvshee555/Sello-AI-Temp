import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Sello AI — AI борлуулагч таны онлайн дэлгүүрт 24/7",
  description:
    "Facebook Messenger дээр харилцагчдад автоматаар хариулж, бараа танилцуулж, борлуулалтыг нэмэгдүүлдэг AI борлуулагч. Монгол онлайн дэлгүүрүүдэд зориулав.",
  keywords: [
    "Sello AI",
    "AI chatbot",
    "Messenger bot",
    "Монгол",
    "онлайн дэлгүүр",
    "борлуулалт",
    "чатбот",
  ],
  openGraph: {
    title: "Sello AI — AI борлуулагч таны онлайн дэлгүүрт 24/7",
    description:
      "Facebook Messenger дээр харилцагчдад автоматаар хариулж, борлуулалтыг нэмэгдүүлнэ.",
    type: "website",
    locale: "mn_MN",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn" className={inter.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
