"use client";
import { FC } from "react";

import { PagesMainArea } from "../PagesMainArea";
import { DataViewer } from "../DataViewer";
import { InteractiveComponent } from "../InteractiveComponent";

import { Company } from "@common/types";
import styled from "styled-components";

interface SharedLayoutProps {
    pageName: string;
    data: Company;
}

export const SharedLayout: FC<SharedLayoutProps> = ({ data, pageName }) => {
    // return (
    //     <PagesMainArea pageName={pageName}>
    //         <DataViewer data={data} />
    //         <InteractiveComponent data={data} />
    //     </PagesMainArea>
    // );
    return (
        <PagesMainArea pageName={pageName}>
            <MainContainer>
                <First>
                    <DataViewer data={data} />
                </First>
                <Third>COSAS</Third>
                <Second>
                    <InteractiveComponent data={data} />
                </Second>
            </MainContainer>
        </PagesMainArea>
    );
};

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid red;
    height: 100%;
    /* grid-template-rows: 1fr; */
`;
const First = styled.div`
    border: 1px solid red;
`;
const Second = styled.div`
    border: 1px solid red;
`;
const Third = styled.div`
    border: 1px solid red;
`;
