// Abstract classes in TypeScript are classes that cannot be instantiated directly.
// They are meant to be extended by other classes. 
// Abstract classes can contain both abstract methods
// (methods without implementation) and concrete methods 
// (methods with implementation)

abstract class Animal {
    // Abstract method (does not have an implementation)
    abstract makeSound(): void;

    // Concrete method (has an implementation)
    move(): void {
        console.log("Moving along...");
    }
}

// Dog class extends the abstract class Animal
class Dog extends Animal {
    // Providing implementation for the abstract method
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

// Cat class extends the abstract class Animal
class Cat extends Animal {
    // Providing implementation for the abstract method
    makeSound(): void {
        console.log("Meow! Meow!");
    }
}

// Creating instances of Dog and Cat
const myDog = new Dog();
const myCat = new Cat();

// Calling methods on the instances
myDog.makeSound(); // Output: Woof! Woof!
myDog.move();      // Output: Moving along...
myCat.makeSound(); // Output: Meow! Meow!
myCat.move();      // Output: Moving along...