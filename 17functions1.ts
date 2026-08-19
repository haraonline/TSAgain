// function with argument types and explicit return type
function add(a: number, b: number): number {
    return a + b;
}

// return type is optional, TypeScript can infer it from the function body
function subtract(a: number, b: number) {
    return a - b;
}


// function that returns nothing (void)
function logMessage(message: string): void {
    console.log(message);
}

// declare the type of a function variable (function expression ?)
let multiply: (x: number, y: number) => number = function (a, b) {
    return a * b;
}


// Or, use arrow function syntax with type annotations. not common but valid
const divide: (x: number, y: number) => number = (a, b) => a / b;


// function with optional parameters
function greet(name: string, greeting?: string): string {
    return `${greeting || 'Hello'}, ${name}!`;
}

// another example
function createUser(name: string, age?: number): { name: string; age?: number } {
    return { name, age };
}

// alternative way to define optional parameters using default values
function greetWithDefault(name: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${name}!`;
}

// explicitly passing undefined to optional parameters. (passing a value or undefined is mandatory if the parameter is optional. 
// the second argument is not optional. this is a good practice)
function greetWithUndefined(name: string, greeting: string | undefined): string {
    return `${greeting || 'Hello'}, ${name}!`;
}

console.log(greetWithUndefined('Alice', undefined)); // Output: Hello, Alice!
console.log(greetWithUndefined('Alice', "Hey")); // Output: Hey, Alice!

