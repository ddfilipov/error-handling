"use client";

import { OneBoxLayout } from "src/components/layout/OneBoxLayout";
import styled from "styled-components";

export default function GeneralError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <OneBoxLayout pageName="Server side Error (caught by error.tsx)">
            <Container>
                <StyledHeading>{`❗This is the error.tsx page❗`}</StyledHeading>
            </Container>
            <h2>{`Mensaje de error: ${error.message}`}</h2>
        </OneBoxLayout>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const StyledHeading = styled.h1`
    color: #ff5555;
`;
