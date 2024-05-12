"use client";
import { Company } from "@common/types";
import { FC, useState } from "react";

interface InteractiveComponentProps {
    data: Company;
}

export const InteractiveComponent: FC<InteractiveComponentProps> = ({ data }) => {
    const [value, setValue] = useState<string>("Default Value");
    return (
        <>
            <button
                onClick={() => {
                    setValue(data.addresses[3].addressName);
                }}
            >
                Click Me!
            </button>
            <div>
                <p>{value}</p>
            </div>
        </>
    );
};
