"use client";

import type { Metadata } from "next";
import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import GeneralError from "./error";
import StyledComponentsRegistry from "./registry";
import styled from "styled-components";
import Navbar from "src/components/Navbar";
import Header from "src/components/Header";

const metadata: Metadata = {
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
                <MainContainer>
                    <ChildrenContainer>
                        <Header />
                        <MainContentContainer>
                            <Navbar />
                            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                        </MainContentContainer>
                    </ChildrenContainer>
                </MainContainer>
            </body>
        </html>
    );
}
export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    padding: 20px;
`;

export const ChildrenContainer = styled.div`
    border: 1px solid #400;
    display: grid;
    grid-template-rows: 10% 1fr;
    width: 1200px;
    padding: 20px;
`;

export const MainContentContainer = styled.div`
    border: 1px solid #400;
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 16px;
    div {
        border: 1px solid #400;
    }
`;
