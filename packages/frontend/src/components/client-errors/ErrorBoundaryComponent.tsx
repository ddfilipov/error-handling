"use client";
import { FC, useEffect } from "react";
import ErrorBoundary from "../ErrorBoundary";

const ComponentThatThrows = () => {
    useEffect(() => {
        throw new Error("This is an error");
    }, []);

    return <div>{`Will never see this div cuz there's an error before`}</div>;
};
export const ErrorBoundaryComponent: FC = ({}) => {
    return (
        <ErrorBoundary fallbackComponent={<div>Error Boundary proccing</div>}>
            <ComponentThatThrows />
        </ErrorBoundary>
    );
};
