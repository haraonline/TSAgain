// class inheritance example
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}


// Dog class inherits from Animal class
// Use super keyword to call the constructor of the parent class
class Dog extends Animal {
    breed: string;
    
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}


// Cat class inherits from Animal class
// Use super keyword to call the constructor of the parent class
class Cat extends Animal {
    color: string;

    constructor(name: string, color: string) {
        super(name);
        this.color = color;
    }

    makeSound(): void {
        console.log(`${this.name} meows.`);
    }
}


// Creating instances of Dog and Cat
const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "Tabby");

// Calling makeSound method on Dog and Cat instances
dog.makeSound();
cat.makeSound();



// Example class with field initializer

class Car {
    make = "Toyota"; // field or property initializer
    model: string = "Corolla"; // field or property initializer
    year: number;

    constructor(year: number) {
        this.year = year;
    }
}
