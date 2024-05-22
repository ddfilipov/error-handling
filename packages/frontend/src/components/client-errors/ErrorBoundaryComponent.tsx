"use client";
import { FC, useEffect } from "react";
import ErrorBoundary from "../ErrorBoundary";
import ErrorBoundaryFallback from "../layout/ErrorBoundaryFallback";

const ChildComponentThatThrowsError = () => {
    useEffect(() => {
        throw new Error("This is an error that ocurrs in the child component during the render phase");
    }, []);

    return <div>{`Won't see this div cuz there's an error before`}</div>;
};
export const ErrorBoundaryComponent: FC = ({}) => {
    return (
        <ErrorBoundary fallbackComponent={<ErrorBoundaryFallback error={null} />}>
            <ChildComponentThatThrowsError />
        </ErrorBoundary>
    );
};
