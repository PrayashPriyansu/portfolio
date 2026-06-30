import type { Metadata } from "next";
import {
    Geist_Mono,
    Instrument_Sans,
    Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { cn } from "@/lib/utils";

const instrumentSans = Instrument_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: "400",
    style: ["normal", "italic"], // italic is beautiful in this family
});

const geistMono = Geist_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Prayash",
    description: "Software engineer. Building backend systems.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "h-full antialiased",
                instrumentSans.variable,
                instrumentSerif.variable,
                geistMono.variable,
            )}
        >
            <body className="min-h-screen flex flex-col dark max-w-3xl mx-auto px-md mt-2">
                <Header />
                <main className="flex-1 mt-2xl mt-8">{children}</main>
            </body>
        </html>
    );
}
