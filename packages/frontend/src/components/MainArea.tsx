"use client";
import { FC, useState } from "react";

import { IFakeApiCall } from "@/app/page";

import UncontrolledClientError from "./UncontrolledClientError";

import * as Styled from "./styled";

const MainArea: FC<IFakeApiCall> = ({ name }) => {
    const [errores, setErrores] = useState<boolean>(false);
    if (errores) {
        throw new Error("algo ha pasado...");
    }
    return (
        <Styled.MainContainer>
            <Styled.ChildrenContainer>
                <UncontrolledClientError />
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
