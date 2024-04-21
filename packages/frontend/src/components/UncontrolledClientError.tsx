"use client";
import { FC, useState } from "react";

import * as Styled from "./styled";
import { EmployeeData } from "@/app/page";

interface UncontrolledClientErrorProps {
    employeeData: EmployeeData[];
    address: { addressName: string; addressNumber: number };
}

const UncontrolledClientError: FC<UncontrolledClientErrorProps> = ({ employeeData, address }) => {
    console.log("employeeData: ", employeeData);
    const [myData, setMyData] = useState<string>(employeeData[0].name);
    return (
        <Styled.ItemsContainer>
            <h2>Uncontrolled Client Error 999</h2>
            <button
                onClick={() => {
                    setMyData(employeeData[1].name);
                }}
            >
                Click me for an uncontrolled client error!
            </button>
            <p>{`myData value: ${myData}`}</p>
            {/* <p>{`address: ${address.addressName}`}</p> */}
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
