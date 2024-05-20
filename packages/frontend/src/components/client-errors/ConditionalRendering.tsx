"use client";
import { FC, useState } from "react";
import styled from "styled-components";
import { StateManagementComponent } from "../StateManagementComponent";
import { Company } from "@common/types";

interface ConditionalRenderingPRops {
    data: Company;
}

export const ConditionalRendering: FC<ConditionalRenderingPRops> = ({ data }) => {
    const [value, setValue] = useState<string>("Default Value");

    const handleClick = () => {
        try {
            // logical OR
            const addressName = data?.addresses?.[3]?.addressName || "No data found";
            // another way of doing it (ternary):
            // const addressName = data?.addresses?.[3]?.addressName ? data.addresses[3].addressName : "No data found";
            setValue(addressName);
        } catch (error) {
            console.error("Failed to fetch the address:", error);
            setValue("Failed to load address");
        }
    };

    return (
        <StateManagementComponent
            actionLabel="Conditional Rendering"
            data={data}
            dataToAccessLabel={"data?.addresses?.[3]?.addressName"}
            handleClick={handleClick}
            currentValue={value}
        />
    );
};
