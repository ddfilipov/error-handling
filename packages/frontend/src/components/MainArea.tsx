"use client";
import { FC, useState } from "react";


import UncontrolledClientError from "./UncontrolledClientError";

import * as Styled from "./styled";
import { EmployeeData } from "@/app/page";

interface MainAreaProps {
    companyData: {
        companyName: string;
        address: { addressName: string; addressNumber: number };
        employees: EmployeeData[];
    };
}

const MainArea: FC<MainAreaProps> = ({ companyData }) => {
    const [errores, setErrores] = useState<boolean>(false);
    if (errores) {
        throw new Error("algo ha pasado...");
    }
    return (
        <Styled.MainContainer>
            <Styled.ChildrenContainer>
                <UncontrolledClientError employeeData={companyData.employees} address={companyData.address}/>
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
