import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import GlobalStarBackground from "@/app/components/layout/GlobalStarBackground";

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

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Rith Seyhak | Software Engineer",
    template: "%s | Rith Seyhak",
  },
  description:
    "Full-stack software engineer specializing in building exceptional digital experiences. Expert in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Rith Seyhak" }],
  creator: "Rith Seyhak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rithseyhak.dev",
    siteName: "Rith Seyhak Portfolio",
    title: "Rith Seyhak | Software Engineer",
    description:
      "Full-stack software engineer specializing in building exceptional digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rith Seyhak - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rith Seyhak | Software Engineer",
    description:
      "Full-stack software engineer specializing in building exceptional digital experiences.",
    images: ["/og-image.png"],
    creator: "@rithseyhak",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased text-white`}
      >
        <GlobalStarBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
