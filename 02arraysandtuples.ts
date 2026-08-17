// Array types
let numbers: number[] = [1, 2, 3, 4, 5];

// Generic type
let strings: Array<string> = ["apple", "banana", "cherry"];

// Tuple types
let personTuple: [string, number] = ["Alice", 30];

// Mixed array types
let mixedTuple: Array<number | string> = [1, "two", 3, "four"];

// Fixed length arrays. Cannot add a new element to the array after its creation
let tuple: [string, number, number] = ["age", 30, 100];

// -------------------

// Array: variable length, every item has the same type
const scores: number[] = [10, 20, 30];
scores.push(40);

// Tuple: fixed positions with specific types
const user: [string, number] = ["Alice", 25];
// position 0 must be string; position 1 must be number


// Spread syntax to create a new array from an existing one
const newScores: number[] = [...scores, 50, 60];
