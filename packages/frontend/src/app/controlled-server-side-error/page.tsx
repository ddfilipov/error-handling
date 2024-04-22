import { Metadata } from "next";
import { PagesMainArea } from "src/components/PagesMainArea";

export const metadata: Metadata = {
    title: "Controlled SSE",
    description: "Controlled SSE",
};

export default async function ControlledServerSiderError() {
    return (
        <PagesMainArea pageName="ControlledServerSiderError">
            <div>ControlledServerSiderError content</div>
        </PagesMainArea>
    );
}
