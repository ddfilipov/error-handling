import { Metadata } from "next";

import { OneBoxLayout } from "src/components/layout/OneBoxLayout";

export const metadata: Metadata = {
    title: "Uncontrolled CSE",
    description: "Uncontrolled CSE",
};

export default async function UncontrolledClientSiderError() {
    return (
        <OneBoxLayout pageName="Server errors??">
            <div>UncontrolledClientSiderError content</div>
        </OneBoxLayout>
    );
}
