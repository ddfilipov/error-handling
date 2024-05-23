"use client";
import { FC } from "react";
import styled from "styled-components";

interface ErrorBoundaryFallbackProps {
    error: Error | null;
}

const ErrorBoundaryFallback: FC<ErrorBoundaryFallbackProps> = ({ error }) => {
    return (
        <Container>
            <StyledHeading>{`❗This is the Error Boundary's fallback component❗`}</StyledHeading>
            <div style={{ color: "#FF5555" }}>
                <span>This is the error message (error.message):</span>
                <p>{error?.message}</p>
            </div>
            <h3>{`Which error are caught by Error Boundaries?`}</h3>
            <StyledList>
                <li>Errors that happen during the component render phase</li>
                <li>Render method of child components</li>
                <li>
                    Lifecycle Method Errors for class components (oldschool: componentDidMount, componentDidUpdate...)
                </li>
            </StyledList>
            <h3>{`Which errors are not caught by Error Boundaries?`}</h3>
            <StyledList>
                <li>Errors in event handlers (onClick)</li>
                <li>Errors in async code, promises, useEffect hook</li>
                <li>Server-side Rendering errors: getServerSideProps, getStaticProps</li>
            </StyledList>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 5px;
`;

const StyledHeading = styled.h1`
    color: #ff5555;
`;

export default ErrorBoundaryFallback;
