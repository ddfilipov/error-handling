// pages/500.tsx
import { OneBoxLayout } from "src/components/layout/OneBoxLayout";
import PageLayout from "src/components/layout/PageLayout";
import styled from "styled-components";

const Custom500 = () => {
    return (
        <PageLayout>
            <OneBoxLayout pageName="/500 page">
                <Container>
                    <StyledHeading>{`❗/500 page: ERROR❗`}</StyledHeading>
                    <p>Page /500</p>
                </Container>
            </OneBoxLayout>
        </PageLayout>
    );
};

export default Custom500;

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
