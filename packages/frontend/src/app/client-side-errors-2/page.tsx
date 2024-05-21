import { Metadata } from "next";

import { DataViewer } from "src/components/DataViewer";
import { ClientError } from "src/components/client-errors/ClientError";
import { ErrorBoundaryComponent } from "src/components/client-errors/ErrorBoundaryComponent";
import { OptionalChaining } from "src/components/client-errors/OptionalChaining";
import { ConditionalRendering } from "src/components/client-errors/ConditionalRendering";
import { ThreeBoxesLayout } from "src/components/layout/ThreeBoxesLayout";

export const metadata: Metadata = {
    title: "Controlled SSE",
    description: "Controlled SSE",
};

export default async function ControlledServerSiderError() {
    const data = await getDataFromServer();

    return (
        <ThreeBoxesLayout
            pageName="Client-side error boundary (2)"
            dataNode={<DataViewer data={data} />}
            interactiveNode={
                <>
                    <ClientError data={data} />
                    <OptionalChaining data={data} />
                    <ConditionalRendering data={data} />
                    <ErrorBoundaryComponent data={data} />
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
