"use client";
import { Company } from "@common/types";
import { FC, useState } from "react";
import { StateManagementComponent } from "../StateManagementComponent";
import ErrorBoundary from "../ErrorBoundary";

interface ErrorBoundaryAlternativeProps {
    data: Company;
}

export const ErrorBoundaryAlternative: FC<ErrorBoundaryAlternativeProps> = ({ data }) => {
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
        return <div>Error</div>;
    }
    return (
        <ErrorBoundary fallbackComponent={<div>Error</div>}>
            <StateManagementComponent
                actionLabel="Error Boundary Alternative"
                dataToAccessLabel={"data?.addresses[3].addressName"}
                handleClick={handleClick}
                currentValue={value}
            />
        </ErrorBoundary>
    );
};
