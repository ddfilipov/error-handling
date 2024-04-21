import MainArea from "../components/MainArea";

export default async function Home() {
    const data = await apiCall();
    console.log("😜 data en page:", data);
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
    console.log("apiCall 🔥");
    const res = await fetch("http://localhost:8080/user");
    console.log("ress 🔥🔥", res);
    if (!res.ok) {
        console.log("res.ok 🔥🔥", res.ok);
        const resJson = await res.json();
        console.log("program doesn't get here 🔥🔥🔥", resJson);
        throw new Error(resJson.error);
    }
    console.log("res ok🔥🔥🔥🔥");
    const resJson = await res.json();
    console.log("res json🔥🔥🔥🔥🔥", resJson);
    return resJson;
}
