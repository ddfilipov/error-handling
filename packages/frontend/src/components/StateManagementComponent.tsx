"use client";
import { Company } from "@common/types";
import { FC } from "react";
import styled from "styled-components";

interface StateManagementComponentProps {
    data: Company;
    actionLabel: string;
    dataToAccessLabel?: string;
    currentValue: string;
    handleClick: () => void;
}

export const StateManagementComponent: FC<StateManagementComponentProps> = ({
    data,
    actionLabel,
    dataToAccessLabel,
    currentValue,
    handleClick,
}) => {
    return (
        <Container>
            <button onClick={handleClick}>Click Me!</button>
            <div>
                <p>{actionLabel}</p>
            </div>
            <p>dataToAccessLabel:</p>
            <p>{dataToAccessLabel}</p>
            <p>currentValue:</p>
            <p>{currentValue}</p>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    padding: 16px;
    min-width: 150px;
    border: 1px solid #c0c0c0;
`;
