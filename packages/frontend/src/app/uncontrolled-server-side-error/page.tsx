import { Metadata } from "next";
import { PagesMainArea } from "src/components/PagesMainArea";

export const metadata: Metadata = {
    title: "Unontrolled SSE",
    description: "Uncontrolled SSE",
};

export default async function UnontrolledServerSiderError() {
    return (
        <PagesMainArea pageName="Unontrolled Server Sider Error">
            <div>UnontrolledServerSiderError content</div>
        </PagesMainArea>
    );
}
