import { Metadata } from "next";
import { PagesMainArea } from "src/components/PagesMainArea";

export const metadata: Metadata = {
    title: "Uncontrolled CSE",
    description: "Uncontrolled CSE",
};

export default async function UncontrolledClientSiderError() {
    return (
        <PagesMainArea pageName="UncontrolledClientSiderError">
            <div>UncontrolledClientSiderError content</div>
        </PagesMainArea>
    );
}
