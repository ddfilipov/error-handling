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
            interactiveNode={<InteractiveComponent data={data} />}
        />
    );
}

const getDataFromServer = async () => {
    const response = await fetch("http://localhost:8080/user");
    const data = await response.json();
    return data;
};
