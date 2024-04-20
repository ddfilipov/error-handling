import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import GeneralError from "./error";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Home",
    description: "Homepage",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
