// Access modifiers in TypeScript are used to control the visibility of class members (properties and methods). The two most common access modifiers are `private` and `protected`.
 // - `private`: Members marked as private can only be accessed within the class they are defined in. They cannot be accessed from outside the class or from derived classes.
 // - `protected`: Members marked as protected can be accessed within the class they are defined in and also in derived classes. However, they cannot be accessed from outside the class hierarchy.


 // access modifiers work only at compile time,
 // at runtime all the fields are public and can be accessed from outside the class.


class Example {
    private privateField: string;
    protected protectedField: string;

    constructor() {
        this.privateField = "I am private";
        this.protectedField = "I am protected";
    }

    private privateMethod() {
        console.log(this.privateField);
    }

    protected protectedMethod() {
        console.log(this.protectedField);
    }
}

class DerivedExample extends Example {
    constructor() {
        super();
        // console.log(this.privateField); // Error: privateField is private
        console.log(this.protectedField); // OK: protectedField is protected

        // this.privateMethod(); // Error: privateMethod is private
        this.protectedMethod(); // OK: protectedMethod is protected
    }
}

// we can also directly write the private field
// inside the constructor instead of declaring it separately
class AnotherExample {
    constructor(private privateField: string, protected protectedField: string) {
        // The fields are automatically created and initialized
    }
}

const example = new AnotherExample("I am private", "I am protected");
// console.log(example.privateField); // Error: privateField is private
// console.log(example.protectedField); // Error: protectedField is protected


// private vs protected
// - private members are only accessible within the class they are defined in.
// - protected members are accessible within the class they are defined 
// in and also in derived classes.