"use client";
import { FC, useEffect } from "react";
import ErrorBoundary from "../ErrorBoundary";
import ErrorBoundaryLayout from "../layout/ErrorBoundaryLayout";

const ChildComponentThatThrowsError = () => {
    useEffect(() => {
        throw new Error("This is an error");
    }, []);

    return <div>{`Will never see this div cuz there's an error before`}</div>;
};
export const ErrorBoundaryComponent: FC = ({}) => {
    
    return (
        <ErrorBoundary fallbackComponent={<ErrorBoundaryLayout />}>
            <ChildComponentThatThrowsError />
        </ErrorBoundary>
    );
};
