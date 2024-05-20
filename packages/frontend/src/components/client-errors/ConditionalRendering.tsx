"use client";
import { Company } from "@common/types";
import { FC, useState } from "react";
import styled from "styled-components";
import { StateManagementComponent } from "../StateManagementComponent";
import ErrorBoundary from "../ErrorBoundary";

interface ConditionalRenderingProps {
    data: Company;
}

export const ConditionalRendering: FC<ConditionalRenderingProps> = ({ data }) => {
    const [value, setValue] = useState<string>("Default Value");
    const [error, setError] = useState<boolean>(false);

    const handleClick = () => {
        try {
            const addressName = data?.addresses[3].addressName;
            if (addressName === undefined) {
                throw new Error("Address name is undefined");
            }
            setValue(addressName);
        } catch (err) {
            console.error(err);
            setError(true);
        }
    };

    if (error) {
        return <div>Error</div>; // Manually handle the error display
    }
    
    return (
        <ErrorBoundary fallbackComponent={<div>Error</div>}>
            <StateManagementComponent
                actionLabel="Conditional Rendering"
                data={data}
                dataToAccessLabel={"data.addresses?.[3].addressName"}
                handleClick={handleClick}
                currentValue={value}
            />
        </ErrorBoundary>
    );
};
