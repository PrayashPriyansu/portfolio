import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/global/page-transition";
import Sidebar from "@/components/global/sidebar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Prayash Priyansu | Full-Stack Developer",
    template: "%s | Prayash Priyansu",
  },
  description:
    "Full-Stack Developer based in India, specializing in React, Next.js, and modern web technologies. Open to work and collaboration.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Frontend",
    "Backend",
    "India",
  ],
  authors: [{ name: "Prayash Priyansu" }],
  creator: "Prayash Priyansu",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Prayash Priyansu",
    title: "Prayash Priyansu | Full-Stack Developer",
    description:
      "Full-Stack Developer based in India, specializing in React, Next.js, and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayash Priyansu | Full-Stack Developer",
    description:
      "Full-Stack Developer based in India, specializing in React, Next.js, and modern web technologies.",
    creator: "@prayash",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-zinc-100`}
      >
        <PageTransition>
          <Sidebar />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
