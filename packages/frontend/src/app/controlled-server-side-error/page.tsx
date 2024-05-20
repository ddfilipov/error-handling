import { Metadata } from "next";

import { DataViewer } from "src/components/DataViewer";
import { ClientError } from "src/components/client-errors/ClientError";
import { ConditionalRendering } from "src/components/client-errors/ConditionalRendering";
import { OptionalChaining } from "src/components/client-errors/OptionalChaining";
import { TernaryOperator } from "src/components/client-errors/TernaryOperator";
import { SharedLayout } from "src/components/layout/SharedLayout";

export const metadata: Metadata = {
    title: "Controlled SSE",
    description: "Controlled SSE",
};

export default async function ControlledServerSiderError() {
    const data = await getDataFromServer();

    return (
        <SharedLayout
            pageName="ControlledServerSiderError"
            dataNode={<DataViewer data={data} />}
            interactiveNode={
                <>
                    <ClientError data={data} />
                    <OptionalChaining data={data} />
                    <TernaryOperator data={data} />
                    <ConditionalRendering data={data} />
                </>
            }
        />
    );
}

const getDataFromServer = async () => {
    const response = await fetch("http://localhost:8080/user");
    const data = await response.json();
    return data;
};
