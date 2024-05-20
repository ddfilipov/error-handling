import { Metadata } from "next";

import { DataViewer } from "src/components/DataViewer";
import { InteractiveComponent } from "src/components/InteractiveComponent";
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
                    <InteractiveComponent
                        data={data}
                        actionLabel="Error"
                        dataToAccessLabel={"data.addresses[3].addressName"}
                    />
                    <InteractiveComponent data={data} actionLabel="Optional chaining" />
                    <InteractiveComponent data={data} actionLabel="Ternary operator" />
                    <InteractiveComponent data={data} actionLabel="Conditional rendering" />
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
