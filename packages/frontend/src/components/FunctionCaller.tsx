"use client";
import { IFakeApiCall } from "@/app/page";
import { FC } from "react";

const FunctionCaller: FC<IFakeApiCall> = ({ name }) => {
    return (
        <div>
            <button onClick={printLine}>Click me!</button>
            <p>Hello, my name is: {name}</p>
        </div>
    );
};

function printLine() {
    console.log("Hello World");
}

export default FunctionCaller;
