"use client";
import { Company } from "@common/types";
import { FC } from "react";
import styled from "styled-components";

interface DataViewerProps {
    data: Company;
}

export const DataViewer: FC<DataViewerProps> = ({ data }) => {
    return <Container>{JSON.stringify(data, null, 2)}</Container>;
};

const Container = styled.pre`
    display: flex;
    justify-content: center;
    padding: 16px;
`;
