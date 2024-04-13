"use client";
import { IFakeApiCall } from "@/app/page";
import { FC, useState } from "react";

import * as Styled from "./styled";

const MainArea: FC<IFakeApiCall> = ({ name }) => {
    const [errores, setErrores] = useState<boolean>(false);
    if (errores) {
        throw new Error("algo ha pasado...");
    }
    return (
        <Styled.MainContainer>
            <Styled.ChildrenContainer>
                <button onClick={() => setErrores(printLine)}>Click me for client error!</button>
                <p>Hello, my name is: {name}</p>
            </Styled.ChildrenContainer>
        </Styled.MainContainer>
    );
};

function printLine(): boolean {
    return true;
    try {
        throw new Error("Client error!");
    } catch {
        console.error("error while clicking button");
    }
    console.log("I'm clicking the button!");
}

export default MainArea;
