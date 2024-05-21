import { Metadata } from "next";
import { ErrorBoundaryComponent } from "src/components/client-errors/ErrorBoundaryComponent";

import { OneBoxLayout } from "src/components/layout/OneBoxLayout";

export const metadata: Metadata = {
    title: "Controlled SSE",
    description: "Controlled SSE",
};

export default async function ClientErrorsTwo() {
    const data = await getDataFromServer();

    return (
        <OneBoxLayout pageName="Client-side error boundary (2)">
            <ErrorBoundaryComponent />
        </OneBoxLayout>
    );
}

const getDataFromServer = async () => {
    const response = await fetch("http://localhost:8080/user");
    const data = await response.json();
    return data;
};
