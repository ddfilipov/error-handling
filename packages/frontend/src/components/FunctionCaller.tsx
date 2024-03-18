"use client";
import { IFakeApiCall } from "@/app/page";
import { FC } from "react";
import {} from "next/error"

const FunctionCaller: FC<IFakeApiCall> = ({ name }) => {
    return (
        <div style={{ border: "1px solid red", padding: "10px" }}>
            <button onClick={printLine}>Click me for client error!</button>
            <p>Hello, my name is: {name}</p>
        </div>
    );
};

function printLine() {
    try {
        throw new Error("Client error!");
    } catch {
        console.error("error while clicking button");
    }
    console.log("I'm clicking the button!");
}

export default FunctionCaller;
