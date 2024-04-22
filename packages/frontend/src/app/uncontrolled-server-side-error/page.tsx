import { Metadata } from "next";
import { PagesMainArea } from "src/components/PagesMainArea";

export const metadata: Metadata = {
    title: "Uncontrolled SSE",
    description: "Uncontrolled SSE",
};

export default async function UncontrolledServerSiderError() {
    return (
        <PagesMainArea pageName="Uncontrolled Server Sider Error">
            <div>UncontrolledServerSiderError content</div>
        </PagesMainArea>
    );
}
