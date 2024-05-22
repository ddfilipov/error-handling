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
        const addressName = data.addresses[3].addressName;
        setValue(addressName);
    };

    return (
        <StateManagementComponent
            actionLabel="Error"
            dataToAccessLabel={"data.addresses[3].addressName"}
            handleClick={handleClick}
            currentValue={value}
        />
    );
};
