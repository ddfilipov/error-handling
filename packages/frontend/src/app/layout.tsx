import type { Metadata } from "next";
import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import GeneralError from "./error";
import StyledComponentsRegistry from "src/lib/StyledJsxRegistry";

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
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
