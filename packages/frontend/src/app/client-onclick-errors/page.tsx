import { Metadata } from "next";

import { DataViewer } from "src/components/DataViewer";
import { ClientError } from "src/components/client-errors/ClientError";
import { ConditionalRendering } from "src/components/client-errors/ConditionalRendering";
import { ErrorBoundaryAlternative } from "src/components/client-errors/ErrorBoundaryAlternative";
import { OptionalChaining } from "src/components/client-errors/OptionalChaining";
import { TwoBoxesLayout } from "src/components/layout/TwoBoxesLayout";

export const metadata: Metadata = {
    title: "Client onClick errors",
    description: "Client onClick errors",
};
export default async function ClientErrorsOne() {
    const data = await getDataFromServer();

    return (
        <TwoBoxesLayout
            pageName="Client onClick errors (unaffected by Error Boundary)"
            dataNode={<DataViewer data={data} />}
            interactiveNode={
                <>
                    <ClientError data={data} />
                    <OptionalChaining data={data} />
                    <ConditionalRendering data={data} />
                    <ErrorBoundaryAlternative data={data} />
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
