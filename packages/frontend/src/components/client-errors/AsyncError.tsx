"use client";
import { FC, useEffect } from "react";
import styled from "styled-components";

interface AsyncErrorProps {}

const AsyncError: FC<AsyncErrorProps> = ({}) => {
    const handleClick = async () => {
        const response = await fetch("http://localhost:8080/uncontrolled-error");
        const data = await response.json();
        console.log("data:", data);
        return data;
    };
    return (
        <Container>
            <button onClick={handleClick}>HOLA CLICK PLS</button>
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

export default AsyncError;
