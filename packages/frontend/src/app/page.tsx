// import { ApiError } from "@/lib/apiError";
import MainArea from "../components/MainArea";

export default async function Home() {
    const data: IFakeApiCall = await fakeApiCall();
    return <MainArea companyData={data} />;
}

export interface EmployeeData {
    name: string;
    age: number;
}

export interface IFakeApiCall {
    companyName: string;
    employees: EmployeeData[];
}

async function fakeApiCall(): Promise<IFakeApiCall> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // throw new Error("Something went wrongggggggggggggg");
    return {
        companyName: "Patterson",
        employees: [
            { name: "Pere", age: 30 },
            { name: "Juan", age: 30 },
        ],
    };
}
