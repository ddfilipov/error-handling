export interface Company {
    companyName: string;
    address: Adress;
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
