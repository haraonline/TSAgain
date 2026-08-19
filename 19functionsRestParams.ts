// rest parameters are used to represent an indefinite number of arguments as an array

function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3); // returns 6
sum(10, 20, 30, 40); // returns 100


function concatenateStrings(separator: string, ...strings: string[]): string {
    return strings.join(separator);
}

 // returns "Hello, World, from, TypeScript"
concatenateStrings(", ", "Hello", "World", "from", "TypeScript");