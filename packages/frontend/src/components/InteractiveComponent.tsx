"use client";
import { Company } from "@common/types";
import { FC, useState } from "react";

interface InteractiveComponentProps {
    data: Company;
}

export const InteractiveComponent: FC<InteractiveComponentProps> = ({ data }) => {
    const [value, setValue] = useState<string>("Default Value");

    const handleClick = () => {
        try {
            const addressName = data.addresses?.[3]?.addressName;
            setValue(addressName);
        } catch (error) {
            console.error("Failed to fetch the address:", error);
            setValue("Failed to load address");
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <div>
                <p>{value}</p>
            </div>
        </div>
    );
};
