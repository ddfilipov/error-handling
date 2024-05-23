import { Metadata } from "next";

import { OneBoxLayout } from "src/components/layout/OneBoxLayout";

export const metadata: Metadata = {
    title: "Server side Error (controlled)",
    description: "Server side Error (controlled)",
};
export const dynamic = "force-dynamic";
export default async function ServerSideErrorControlled() {
    const data = await getDataFromServer();

    return (
        <OneBoxLayout pageName="Server side Error (controlled)">
            <div>Server side Error (error.tsx)</div>
        </OneBoxLayout>
    );
}

const getDataFromServer = async () => {
    const response = await fetch("http://localhost:8080/uncontrolled-error");
    const data = await response.json();
    if (!response.ok) {
        throw new Error(
            `We're throwing an error from our ServerSideErrorControlled page if response.ok === false. Error status: ${response.status}. Error message: ${data.error}`
        );
    }
    return data;
};
