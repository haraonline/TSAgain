export type Person = {
    name: string;
    age: number;
    email?: string; // Optional property
};

export interface Employee extends Person {
    employeeId: string;
    department: string;
    position: string;
}