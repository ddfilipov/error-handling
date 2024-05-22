"use client";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";

interface AsyncErrorProps {}

const AsyncError: FC<AsyncErrorProps> = ({}) => {
    const [errorMessage, setErrorMessage] = useState<string>("");
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8080/uncontrolled-error");
            const data = await response.json();
            setErrorMessage(data);
            return data;
        }
        const res = fetchData();
    }, []);
    return (
        <Container>
            <p>Nothing will happen for the user</p>
            {errorMessage}
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
