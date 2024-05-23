import React from "react";
import "../../app/globals.css";
import styled from "styled-components";
import Navbar from "src/components/Navbar";
import Header from "src/components/layout/Header";
import StyledComponentsRegistry from "src/app/registry"; 

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MainContainer>
            <ChildrenContainer>
                <Header />
                <MainContentContainer>
                    <Navbar />
                    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                </MainContentContainer>
            </ChildrenContainer>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    padding: 20px;
`;

const ChildrenContainer = styled.div`
    display: grid;
    grid-template-rows: 10% 1fr;
    width: 1200px;
    padding: 20px;
`;

const MainContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 16px;
`;

export default PageLayout;
