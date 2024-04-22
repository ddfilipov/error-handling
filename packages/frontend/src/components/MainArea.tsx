"use client";
import { FC, useState } from "react";

import UncontrolledClientError from "./UncontrolledClientError";

import { EmployeeData } from "@common/types/index";

interface MainAreaProps {
    companyData: {
        companyName: string;
        address: { addressName: string; addressNumber: number };
        employees: EmployeeData[];
    };
}

const MainArea: FC<MainAreaProps> = ({ companyData }) => {
    console.log("weqweqwe", companyData);
    const [errores, setErrores] = useState<boolean>(false);
    if (errores) {
        throw new Error("algo ha pasado...");
    }
    return <UncontrolledClientError employeeData={companyData.employees} address={companyData.address} />;
};

export default MainArea;
