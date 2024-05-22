import { Metadata } from "next";

import { OneBoxLayout } from "src/components/layout/OneBoxLayout";

export const metadata: Metadata = {
    title: "Uncontrolled SSE",
    description: "Uncontrolled SSE",
};

export default async function UncontrolledServerSiderError() {
    return (
        <OneBoxLayout pageName="More server errors??">
            <div>UncontrolledServerSiderError content</div>
        </OneBoxLayout>
    );
}
