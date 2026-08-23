// getters and setters are special methods that allow you
// to get and set the values of an object's properties. 
// They provide a way to control access to the properties and 
// can include additional logic when getting or setting a value.
// if no setters are defined, the properties is read-only and 
// cannot be modified from outside the class.

class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name(): string {
        return this._name;
    }

    // Setter for name
    set name(newName: string) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.error("Name cannot be empty.");
        }
    }

    // Getter for age
    get age(): number {
        return this._age;
    }   

    // Note: No setter for age, making it read-only from outside the class
}

const person = new Person("Alice", 30);
console.log(person.name);

person.name = "Bob"; // Using the setter to change the name
console.log(person.name); // Output: Bob
// person.age = 31; // This will cause an error because there is no setter for age