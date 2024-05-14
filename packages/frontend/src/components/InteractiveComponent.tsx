"use client";
import { Company } from "@common/types";
import { FC, useState } from "react";
import styled from "styled-components";

interface InteractiveComponentProps {
    data: Company;
    actionLabel: string;
}

export const InteractiveComponent: FC<InteractiveComponentProps> = ({ data, actionLabel }) => {
    const [value, setValue] = useState<string>("Default Value");

    const handleClick = () => {
        try {
            const addressName = data.addresses?.[3]?.addressName;
            setValue(addressName);
        } catch (error) {
            console.error("Failed to fetch the address:", error);
            setValue("Failed to load address");
        }
    };

    return (
        <Container>
            <button onClick={handleClick}>Click Me!</button>
            <div>
                <p>{actionLabel}</p>
            </div>
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    min-width: 150px;
    border: 1px solid red;
`;
