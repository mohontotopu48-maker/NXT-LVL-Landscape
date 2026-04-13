import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NXT LVL Landscape | Professional Landscaping & Hardscaping Services",
  description:
    "From lush gardens to stunning patios, NXT LVL Landscape brings your outdoor vision to life. Professional landscaping, hardscaping, and patio solutions by Joseph A. & Jose Henriquez. Call (657) 720-9054.",
  keywords: [
    "landscape design",
    "hardscaping",
    "pavers",
    "concrete work",
    "retaining walls",
    "landscape lighting",
    "outdoor living",
    "patio installation",
    "re-seeding",
    "mulching",
    "pruning",
    "mowing",
    "snow removal",
    "aeration",
    "sod installation",
    "NXT LVL Landscape",
    "Orange County landscaping",
  ],
  authors: [{ name: "NXT LVL Landscape", url: "https://nxtlvllandscaping.com" }],
  creator: "NXT LVL Landscape",
  openGraph: {
    title: "NXT LVL Landscape | Professional Landscaping & Hardscaping Services",
    description:
      "From lush gardens to stunning patios, NXT LVL Landscape brings your outdoor vision to life. Get expert design, reliable service, and lasting beauty.",
    type: "website",
    url: "https://nxtlvllandscaping.com",
    siteName: "NXT LVL Landscape",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NXT LVL Landscape | Professional Landscaping & Hardscaping Services",
    description:
      "From lush gardens to stunning patios, NXT LVL Landscape brings your outdoor vision to life.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#2a5a3e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
