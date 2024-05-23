"use client";
import { FC, ReactNode } from "react";

import styled from "styled-components";

import { PagesMainArea } from "./PagesMainArea";
import ErrorBoundary from "../ErrorBoundary";
import ErrorBoundaryFallback from "./ErrorBoundaryFallback";

interface ThreeBoxesLayoutProps {
    pageName: string;
    dataNode: ReactNode;
    interactiveNode: ReactNode;
}

export const ThreeBoxesLayout: FC<ThreeBoxesLayoutProps> = ({ pageName, dataNode, interactiveNode }) => {
    return (
        <ErrorBoundary fallbackComponent={<ErrorBoundaryFallback error={null} />}>
            <PagesMainArea pageName={pageName}>
                <MainContainer>
                    <TopContainer>{dataNode}</TopContainer>
                    <BottomContainer>{interactiveNode}</BottomContainer>
                </MainContainer>
            </PagesMainArea>
        </ErrorBoundary>
    );
};

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #c0c0c0;
    height: 100%;
`;
const TopContainer = styled.div`
    border: 1px solid #c0c0c0;
`;
const BottomContainer = styled.div`
    border: 1px solid #c0c0c0;
    display: flex;
    flex-direction: row;
`;
