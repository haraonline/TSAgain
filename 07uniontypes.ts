// Union type of string literals
const user: "hara" | "John" | "Doe" = "hara"; 

// Union type of string literals with a variable
let userName: "hara" | "John" | "Doe";
userName = "John"; // valid assignment
// userName = "Alice"; // Error: Type '"Alice"' is not assignable 
// to type '"hara" | "John" | "Doe"'.


// Union type of string literals with a function
function greetUser(user: "hara" | "John" | "Doe") {
    console.log(`Hello, ${user}!`);
}

greetUser("hara"); // valid
// greetUser("Alice"); // Error: Argument of type '"Alice"' is not assignable to parameter of type '"hara" | "John" | "Doe"'.


// Named union type of string literals
type User = "hara" | "John" | "Doe";

// Using the named union type
let currentUser: User;
currentUser = "Doe"; // valid assignment
// currentUser = "Alice"; // Error: Type '"Alice"' is not assignable to type 'User'.