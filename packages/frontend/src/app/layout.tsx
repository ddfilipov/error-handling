"use client";

import "./globals.css";
import StyledComponentsRegistry from "./registry";
import styled from "styled-components";
import Navbar from "src/components/Navbar";
import Header from "src/components/layout/Header";

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
const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    padding: 20px;
`;

const ChildrenContainer = styled.div`
    display: grid;
    grid-template-rows: 10% 1fr;
    width: 1400px;
    padding: 20px;
`;

const MainContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 16px;
`;
