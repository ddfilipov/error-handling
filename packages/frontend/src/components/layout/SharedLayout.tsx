"use client";
import { FC, ReactNode } from "react";

import styled from "styled-components";

import { PagesMainArea } from "../PagesMainArea";
import { DataViewer } from "../DataViewer";
import { InteractiveComponent } from "../InteractiveComponent";

import { Company } from "@common/types";

interface SharedLayoutProps {
    pageName: string;
    dataNode: ReactNode;
    interactiveNode: ReactNode;
}

export const SharedLayout: FC<SharedLayoutProps> = ({ pageName, dataNode, interactiveNode }) => {
    return (
        <PagesMainArea pageName={pageName}>
            <MainContainer>
                <First>{dataNode}</First>
                <Second>COSAS</Second>
                <Third>{interactiveNode}</Third>
            </MainContainer>
        </PagesMainArea>
    );
};

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid red;
    height: 100%;
`;
const First = styled.div`
    border: 1px solid red;
`;
const Second = styled.div`
    border: 1px solid red;
`;
const Third = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    grid-column-start: 1;
    grid-column-end: 3;
`;
