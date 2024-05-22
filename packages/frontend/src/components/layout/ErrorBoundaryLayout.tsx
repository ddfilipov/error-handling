"use client";
import { FC } from "react";
import styled from "styled-components";

const ErrorBoundaryLayout: FC = ({}) => {
    return (
        <Container>
            <p>Hola soy el Errorboundary!</p>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default ErrorBoundaryLayout;
