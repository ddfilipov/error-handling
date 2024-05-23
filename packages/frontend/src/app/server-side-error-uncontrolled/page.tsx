import { Metadata } from "next";

import { OneBoxLayout } from "src/components/layout/OneBoxLayout";

export const metadata: Metadata = {
    title: "Server side Error (uncontrolled)",
    description: "Server side Error (uncontrolled)",
};

export default async function ServerSideErrorUnontrolled() {
    const data = await getDataFromServer();

    return (
        <OneBoxLayout pageName="Server side Error (uncontrolled)">
            <div>
                <h3>Page unaffected by error.tsx</h3>
                <p>{`Only the backend will notice there has been an error. Not even nextjs server-side.`}</p>
            </div>
        </OneBoxLayout>
    );
}

const getDataFromServer = async () => {
    const response = await fetch("http://localhost:8080/uncontrolled-error");
    const data = await response.json();
    return data;
};
