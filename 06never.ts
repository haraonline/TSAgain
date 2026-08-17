// never is a type that represents values that never occur.
// It is used to indicate that a function does not return a value or 
// that a variable will never hold a value. In TypeScript,
// the never type is often used in functions that throw exceptions or
// have infinite loops.

// Demonstrate the user of never type

function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // Infinite loop
    }
}