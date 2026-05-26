// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boblebad Official Portal",
  description: "Multi-instrumentalist, producer and DJ based out of Oslo, Norway. Crafting sun-drenched Balearic textures, subaquatic micro-house, and premium contemporary disco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-screen w-screen overflow-hidden antialiased`}
    >
      <body className="h-full w-full overflow-hidden bg-[#e0f2f1]">
        {children}
      </body>
    </html>
  );
}