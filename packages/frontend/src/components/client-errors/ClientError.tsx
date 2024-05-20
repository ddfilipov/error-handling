"use client";
import { Company } from "@common/types";
import { FC, useState } from "react";
import styled from "styled-components";
import { StateManagementComponent } from "../StateManagementComponent";

interface ClientErrorProps {
    data: Company;
}

export const ClientError: FC<ClientErrorProps> = ({ data }) => {
    const [value, setValue] = useState<string>("Default Value");

    const handleClick = () => {
        try {
            const addressName = data.addresses[3].addressName;
            setValue(addressName);
        } catch (error) {
            console.error("Failed to fetch the address:", error);
            setValue("Failed to load address");
        }
    };

    return (
        <StateManagementComponent
            actionLabel="Error"
            data={data}
            dataToAccessLabel={"data.addresses[3].addressName"}
            handleClick={handleClick}
            currentValue={value}
        />
    );
};
