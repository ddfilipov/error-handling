import { Metadata } from "next";
import { PagesMainArea } from "src/components/PagesMainArea";

export const metadata: Metadata = {
    title: "Controlled CSE",
    description: "Controlled CSE",
};

export default async function ClientErrorsOne() {
    return (
        <PagesMainArea pageName="Client-side errors 1">
            <div>Client-side errors 1</div>
        </PagesMainArea>
    );
}
