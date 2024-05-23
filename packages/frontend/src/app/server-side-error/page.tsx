import { Metadata } from "next";

import { OneBoxLayout } from "src/components/layout/OneBoxLayout";

export const metadata: Metadata = {
    title: "Server side Error (error.tsx)",
    description: "Server side Error (error.tsx)",
};

export default async function ServerSideError() {
    return (
        <OneBoxLayout pageName="Server side Error (error.tsx)">
            <div>Server side Error (error.tsx)</div>
        </OneBoxLayout>
    );
}
