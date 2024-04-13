import MainArea from "../components/MainArea";

export default async function Home() {
    const data = await fakeApiCall();
    return <MainArea companyData={data as IFakeApiCall} />;
}

export interface EmployeeData {
    name: string;
    age: number;
}

export interface IFakeApiCall {
    companyName: string;
    address: { addressName: string; addressNumber: number };
    employees: EmployeeData[];
}

async function fakeApiCall(): Promise<unknown> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
        companyName: "Patterson",
        employees: [{ name: "Pere", age: 30 }],
    };
}
