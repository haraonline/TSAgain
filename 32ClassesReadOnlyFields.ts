class Person {
    public readonly id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}


// Creating an instance of the Person class
const person = new Person(1, "Alice");

// Accessing the readonly field
console.log(person.id); // Output: 1
console.log(person.name); // Output: Alice
person.name = "Bob"; // Allowed, as name is not readonly
console.log(person.name); // Output: Bob

// Attempting to modify the readonly field // after initialization will result 
// in a compile-time error
// person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.