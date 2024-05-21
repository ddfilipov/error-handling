"use client";
import { FC, ReactNode } from "react";

import styled from "styled-components";

import { PagesMainArea } from "../PagesMainArea";

interface OneBoxLayoutProps {
    pageName: string;
    children: ReactNode;
}

export const OneBoxLayout: FC<OneBoxLayoutProps> = ({ pageName, children }) => {
    return (
        <PagesMainArea pageName={pageName}>
            <MainContainer>{children}</MainContainer>
        </PagesMainArea>
    );
};

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid #c0c0c0;
    height: 100%;
`;