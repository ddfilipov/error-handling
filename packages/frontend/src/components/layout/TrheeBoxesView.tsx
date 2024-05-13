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
    return (
        <MainContainer>
            <First>
                <DataViewer data={data} />
            </First>
            <Second>
                <InteractiveComponent data={data} />
            </Second>
            <Third>COSAS</Third>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid red;
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
