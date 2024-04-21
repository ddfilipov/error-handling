import MainArea from "../components/MainArea";

export default async function Home() {
    console.log("what the actual fuck");
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
    console.log("apiCall");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch("http://localhost:8080/user");
    console.log("res", res);
    const resJson = await res.json();
    return resJson;
}
