"use client";
import { Company } from "@common/types";
import { FC, useState } from "react";

interface InteractiveComponentProps {
    data: Company;
}

export const InteractiveComponent: FC<InteractiveComponentProps> = ({ data }) => {
    const [algo, setAlgo] = useState<string>("algo");
    return (
        <>
            <button
                onClick={() => {
                    setAlgo(data.addresses?.[1]?.addressName);
                }}
            >
                Click Me!
            </button>
            <div>
                <p>{algo}</p>
            </div>
        </>
    );
};
