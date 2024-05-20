"use client";
import { Company } from "@common/types";
import { FC, useState } from "react";
import styled from "styled-components";
import { StateManagementComponent } from "../StateManagementComponent";

interface ConditionalRenderingProps {
    data: Company;
}

export const ConditionalRendering: FC<ConditionalRenderingProps> = ({ data }) => {
    const [value, setValue] = useState<string>("Default Value");

    const handleClick = () => {
        try {
            const addressName = data.addresses?.[3].addressName;
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
            dataToAccessLabel={"data.addresses?.[3].addressName"}
            handleClick={handleClick}
        />
    );
};
