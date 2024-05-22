"use client";
import { FC } from "react";
import styled from "styled-components";

const ErrorBoundaryLayout: FC = ({}) => {
    return (
        <Container>
            <p>{`Hi, I'm the Error Boundary's fallback component!`}</p>
            <p>{`Which error are caught by Error Boundaries?`}</p>
            <ul>
                <li>Errors that happen during the component render phase</li>
                <li>Render method of child components</li>
                <li>
                    Lifecycle Method Errors for class components (oldschool: componentDidMount, componentDidUpdate...)
                </li>
            </ul>
            <p>{`Which errors are not caught by Error Boundaries?`}</p>
            <ul>
                <li>Errors in event handlers (onClick)</li>
                <li>Errors in async code, promises, useEffect hook</li>
                <li>Server-side Rendering errors: getServerSideProps, getStaticProps</li>
            </ul>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ff5555;
`;

export default ErrorBoundaryLayout;
