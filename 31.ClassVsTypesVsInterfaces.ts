// CLASSES VS TYPES VS INTERFACES

// CLASS
// Use a class when you need to create objects with runtime behavior, state,
// constructors, or inheritance. Classes exist in the compiled JavaScript.
// the new key word is only used only to create class instances and not with types or interfaces.
class User {
	constructor(public name: string) {}

	greet(): string {
		return `Hello, ${this.name}`;
	}
}

// CLASS USAGE
const user = new User("Alice");

// INTERFACE
// Use an interface to describe the shape of an object or a contract that a
// class must follow. Interfaces are easy to extend and can be declaration-merged.
interface Account {
	id: number;
	email: string;
}

// INTERFACE USAGE WITH OBJECT LITERAL - MUST MATCH THE INTERFACE STRUCTURE
const account: Account = {
	id: 1,
	email: "user@example.com",
};

// INTERFACE USAGE WITH CLASSES (IMPLEMENTATION)
class Admin implements Account {
    id: number; // must implement the properties defined in the Account interface
    email: string; // must implement the properties defined in the Account interface
    username: string; // additional property not defined in the Account interface


    constructor(id: number, email: string, username: string) {
        this.id = id;
        this.email = email;
        this.username = username;
    }
}

// TYPE ALIAS
// Use a type alias for unions, tuples, primitives, mapped types, or complex
// combinations. A type can also describe an object, but it cannot be reopened.
type Status = "active" | "inactive";
type Coordinates = [number, number];

// TYPE ALIAS USAGE
const status: Status = "active";
const point: Coordinates = [10, 20];

// Quick rule:
// - Need runtime behavior or instances? Use a class.
// - Need an extendable object contract? Use an interface.
// - Need a union, tuple, or composed type? Use a type alias.