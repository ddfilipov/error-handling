export interface Company {
    companyName: string;
    addresses: Adress[];
    employees: EmployeeData[];
}

export interface Adress {
    addressName: string;
    addressNumber: number;
}

export interface EmployeeData {
    name: string;
    age: number;
}
