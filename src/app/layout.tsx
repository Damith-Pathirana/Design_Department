import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AnimationWrapper from "@/components/AnimationWrapper";
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
  title: "Design Department | Web Design Agency",
  description: "Highly professional and artistic web design agency creating immersive digital experiences with WebGL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Serif:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-void scroll-smooth font-sans selection:bg-electric selection:text-white">
        <AnimationWrapper>
          {children}
        </AnimationWrapper>
      </body>
    </html>
  );
}
