import FunctionCaller from "../components/FunctionCaller";

export default async function Home() {
    const data: IFakeApiCall = await fakeApiCall();
    return <FunctionCaller name={data.name} />;
}

export interface IFakeApiCall {
    name: string;
}

async function fakeApiCall(): Promise<IFakeApiCall> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    throw new Error("Something went wrong");
    return { name: "Denis" };
}