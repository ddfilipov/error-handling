import { Metadata } from "next";
import { PagesMainArea } from "src/components/PagesMainArea";

export const metadata: Metadata = {
    title: "Unontrolled CSE",
    description: "Uncontrolled CSE",
};

export default async function UnontrolledClientSiderError() {
    return (
        <PagesMainArea pageName="UnontrolledClientSiderError">
            <div>UnontrolledClientSiderError content</div>
        </PagesMainArea>
    );
}
