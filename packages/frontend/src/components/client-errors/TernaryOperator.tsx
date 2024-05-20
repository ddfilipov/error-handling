"use client";
import { FC, useState } from "react";
import styled from "styled-components";
import { StateManagementComponent } from "../StateManagementComponent";
import { Company } from "@common/types";

interface TernaryOperatorProps {
    data: Company;
}

export const TernaryOperator: FC<TernaryOperatorProps> = ({ data }) => {
    const [value, setValue] = useState<string>("Default Value");

    const handleClick = () => {

        try {
            const addressName = data?.addresses?.[3]?.addressName;
            setValue(addressName);
        } catch (error) {
            console.error("Failed to fetch the address:", error);
            setValue("Failed to load address");
        }
    };

    return (
        <StateManagementComponent
            actionLabel="Optional chaining"
            data={data}
            dataToAccessLabel={"data?.addresses?.[3]?.addressName"}
            handleClick={handleClick}
        />
    );
};
