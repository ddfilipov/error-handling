"use client";
import { FC } from "react";

const FunctionCaller: FC = () => {
    return (
        <div>
            <button onClick={printLine}>Click me!</button>
        </div>
    );
};

function printLine() {
    console.log("Hello World");
}

export default FunctionCaller;
