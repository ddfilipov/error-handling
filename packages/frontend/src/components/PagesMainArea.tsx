"use client";

import { FC, ReactNode } from "react";
import styled from "styled-components";

interface PagesMainAreaProps {
    pageName: string;
    children: ReactNode;
}

export const PagesMainArea: FC<PagesMainAreaProps> = ({ pageName, children }) => {
    return (
        <Container>
            <h2>{pageName}</h2>
            <div>{children}</div>
        </Container>
    );
};

const Container = styled.div`
    border: 1px solid #c0c0c0;
    display: grid;
    grid-template-rows: 40px 1fr;
`;
