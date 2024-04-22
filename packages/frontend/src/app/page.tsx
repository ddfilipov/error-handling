import { Metadata } from "next";

import MainArea from "../components/MainArea";

import { Company } from "@common/types";
import { PagesMainArea } from "src/components/PagesMainArea";

export const metadata: Metadata = {
    title: "Home",
    description: "Homepage",
};

export default async function Home() {
    const data: Company = await apiCall();
    console.log("😜 data en page:", data);
    // return <MainArea companyData={data} />;
    return (
        <PagesMainArea pageName="Home Page">
            <p>cosas</p>
        </PagesMainArea>
    );
}

async function apiCall(): Promise<Company> {
    const res = await fetch("http://localhost:8080/user");
    if (!res.ok) {
        console.log("res.ok 🔥🔥", res.ok);
        const resJson = await res.json();
        throw new Error(resJson.error);
    }
    const resJson: Company = await res.json();
    return resJson;
}
