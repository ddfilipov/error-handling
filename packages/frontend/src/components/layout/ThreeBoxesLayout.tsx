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
                    <First>{dataNode}</First>
                    <Second>COSAS</Second>
                    <Third>{interactiveNode}</Third>
                </MainContainer>
            </PagesMainArea>
        </ErrorBoundary>
    );
};

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid #c0c0c0;
    height: 100%;
`;
const First = styled.div`
    border: 1px solid #c0c0c0;
`;
const Second = styled.div`
    border: 1px solid #c0c0c0;
`;
const Third = styled.div`
    border: 1px solid #c0c0c0;
    display: flex;
    flex-direction: row;
    grid-column-start: 1;
    grid-column-end: 3;
`;
