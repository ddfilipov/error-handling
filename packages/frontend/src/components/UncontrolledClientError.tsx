"use client";
import { FC } from "react";

import * as Styled from "./styled";

const UncontrolledClientError: FC = () => {
    return (
        <Styled.ItemsContainer>
            <h2>Uncontrolled Client Error</h2>
            <button onClick={() => {}}>Click me for an uncontrolled client error!</button>
        </Styled.ItemsContainer>
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

export default UncontrolledClientError;
