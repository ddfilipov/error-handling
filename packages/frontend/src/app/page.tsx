import MainArea from "../components/MainArea";

export default async function Home() {
    const data = await apiCall();
    console.log(data);
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

async function apiCall(): Promise<unknown> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch("http://localhost:8080/user");
    const resJson = await res.json();
    return resJson;
}
