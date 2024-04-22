"use client";

import "./globals.css";
import StyledComponentsRegistry from "./registry";
import styled from "styled-components";
import Navbar from "src/components/Navbar";
import Header from "src/components/Header";

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
    display: grid;
    grid-template-rows: 10% 1fr;
    width: 1200px;
    padding: 20px;
`;

export const MainContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 16px;
`;
