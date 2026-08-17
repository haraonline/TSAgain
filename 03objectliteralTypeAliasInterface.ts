// Object literals
const user = {name: "Alice"};
const upperCaseName = user.name.toUpperCase();


// Interface
interface User { name: string; id: number; }
const user1: User = { name: "Bob", id: 1 };


// Type alias
type Point = { x: number; y: number };
const point: Point = { x: 10, y: 20 };

// Index signature
interface Employee {
    name: string;
    id: number;
    [key: string]: any;    
}

// Example of using the Employee interface with an index signature
const employee: Employee = { 
    name: "Charlie", 
    id: 2, department: "HR",
    role: "Manager" // optional property due to index signature
};