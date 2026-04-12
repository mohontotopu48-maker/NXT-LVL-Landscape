import type { Metadata } from "next";
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
  title: "NXT LVL Landscape | Premium Hardscape & Landscape Design",
  description:
    "Precision hardscaping and landscape design that creates lasting outdoor experiences. 20 years of expertise in pavers, concrete, retaining walls, and landscape lighting. Founded by Joseph & Jose Henriquez.",
  keywords: [
    "landscape design",
    "hardscaping",
    "pavers",
    "concrete",
    "retaining walls",
    "landscape lighting",
    "outdoor living",
    "NXT LVL Landscape",
  ],
  authors: [{ name: "NXT LVL Landscape" }],
  openGraph: {
    title: "NXT LVL Landscape | Premium Hardscape & Landscape Design",
    description:
      "Precision hardscaping and landscape design that creates lasting outdoor experiences. 20 years of expertise.",
    type: "website",
  },
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
