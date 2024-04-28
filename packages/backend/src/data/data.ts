import { Company } from "@common/types";

export const immutableData: Company = {
    companyName: "Patterson",
    addresses: [
        { addressName: "Carrer de Sant Miquel", addressNumber: 51 },
        { addressName: "Carrer Àlaba", addressNumber: 61 },
    ],
    employees: [
        { name: "Pere", age: 30 },
        { name: "Juan", age: 25 },
        { name: "Joan", age: 20 },
    ],
};
