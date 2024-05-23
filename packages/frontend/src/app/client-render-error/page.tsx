import { Metadata } from "next";
import { ErrorBoundaryComponent } from "src/components/client-errors/ErrorBoundaryComponent";

import { OneBoxLayout } from "src/components/layout/OneBoxLayout";

export const metadata: Metadata = {
    title: "Client Render Error",
    description: "Client Render Error",
};

export default async function ClientRenderError() {
    const data = await getDataFromServer();

    return (
        <OneBoxLayout pageName="Client Render Error (caught by Error Boundary)">
            <ErrorBoundaryComponent />
        </OneBoxLayout>
    );
}

const getDataFromServer = async () => {
    const response = await fetch("http://localhost:8080/user");
    const data = await response.json();
    return data;
};
