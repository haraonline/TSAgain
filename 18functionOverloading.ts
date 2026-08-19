// function overloading in typescript
// better write separate functions, think before using function overloading

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
    return a + b;
}

add(5, 10); // returns 15
add("Hello, ", "World!"); // returns "Hello, World!"


// another example of function overloading

function getLength(item: string): number;
function getLength(item: any[]): number;

function getLength(item: any): number {
    if (typeof item === "string") {
        return item.length;
    } else if (Array.isArray(item)) {
        return item.length;        
    }    
    throw new Error("Invalid argument type");
}