"use client";
import GeneralError from "@/app/error";
import { IFakeApiCall } from "@/app/page";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { FC } from "react";

const FunctionCaller: FC<IFakeApiCall> = ({ name }) => {
    return (
        <div style={{ border: "1px solid red", padding: "10px" }}>
            <button onClick={printLine}>Click me for client error!</button>
            <p>Hello, my name is: {name}</p>
        </div>
    );
};

function printLine() {
    throw new Error("Client error!");
    console.log("Hello World");
}

export default FunctionCaller;
