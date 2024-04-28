import { Metadata } from "next";
import { DataViewer } from "src/components/DataViewer";
import { InteractiveComponent } from "src/components/InteractiveComponent";
import { PagesMainArea } from "src/components/PagesMainArea";

export const metadata: Metadata = {
    title: "Controlled SSE",
    description: "Controlled SSE",
};

export default async function ControlledServerSiderError() {
    const data = await getDataFromServer();
    return (
        <PagesMainArea pageName="ControlledServerSiderError">
            <DataViewer data={data} />
            <InteractiveComponent data={data} />
        </PagesMainArea>
    );
}

const getDataFromServer = async () => {
    const response = await fetch("http://localhost:8080/user");
    const data = await response.json();
    return data;
};
