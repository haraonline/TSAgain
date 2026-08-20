

import type { Employee, Person } from './23AnotherExportExample'; // type-only import for Person

const john: Person = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};

const jane: Employee = {
    name: 'Jane Smith',
    age: 28,
    email: 'jane.smith@example.com',
    employeeId: 'E123',
    department: 'Engineering',
    position: 'Software Engineer'
};

console.log(john);
console.log(jane);
