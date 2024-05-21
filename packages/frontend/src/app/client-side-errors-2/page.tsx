import { Metadata } from "next";

import { OneBoxLayout } from "src/components/layout/OneboxLayout";

export const metadata: Metadata = {
    title: "Controlled SSE",
    description: "Controlled SSE",
};

export default async function ClientErrorsTwo() {
    const data = await getDataFromServer();

    return (
        <OneBoxLayout pageName="Client-side error boundary (2)">
            <p></p>
        </OneBoxLayout>
    );
}

const getDataFromServer = async () => {
    const response = await fetch("http://localhost:8080/user");
    const data = await response.json();
    return data;
};
