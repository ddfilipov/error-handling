import { Metadata } from "next";
import { PagesMainArea } from "src/components/PagesMainArea";

export const metadata: Metadata = {
    title: "Controlled CSE",
    description: "Controlled CSE",
};

export default async function ControlledClientSiderError() {
    return (
        <PagesMainArea pageName="ControlledClientSiderError">
            <div>ControlledClientSiderError content</div>
        </PagesMainArea>
    );
}
