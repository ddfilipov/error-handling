import { Metadata } from "next";
import AsyncError from "src/components/client-errors/AsyncError";

import { OneBoxLayout } from "src/components/layout/OneBoxLayout";

export const metadata: Metadata = {
    title: "Uncontrolled SSE",
    description: "Uncontrolled SSE",
};

export default async function ClientAsyncError() {
    return (
        <OneBoxLayout pageName="Client async Error (unaffected by Error Boundary)">
            <AsyncError />
        </OneBoxLayout>
    );
}
