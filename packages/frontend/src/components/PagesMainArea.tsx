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
            <ChildrenContainer>{children}</ChildrenContainer>
        </Container>
    );
};

const Container = styled.div`
    border: 1px solid #c0c0c0;
    h2 {
        padding: 16px 0 0 16px;
        border-bottom: 1px solid #c0c0c0;
    }
    display: grid;
    grid-template-rows: 70px 1fr;
`;
const ChildrenContainer = styled.div`
    padding: 16px;
`;
