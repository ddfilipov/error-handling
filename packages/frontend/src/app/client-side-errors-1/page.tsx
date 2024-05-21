import { Metadata } from "next";
import { DataViewer } from "src/components/DataViewer";
import { PagesMainArea } from "src/components/PagesMainArea";
import { ClientError } from "src/components/client-errors/ClientError";
import { ConditionalRendering } from "src/components/client-errors/ConditionalRendering";
import { ErrorBoundaryComponent } from "src/components/client-errors/ErrorBoundaryComponent";
import { OptionalChaining } from "src/components/client-errors/OptionalChaining";
import { ThreeBoxesLayout } from "src/components/layout/ThreeBoxesLayout";

export const metadata: Metadata = {
    title: "Client-Side errors 1",
    description: "Client-Side errors 1",
};
export default async function ClientErrorsOne() {
    const data = await getDataFromServer();

    return (
        <ThreeBoxesLayout
            pageName="Client-side errors 1"
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
