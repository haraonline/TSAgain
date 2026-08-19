// Interface only features

// 1. Implementation of interfaces in classes

interface Animal {
  name: string;
  age: number;
  makeSound(): void;
}

// class implementing the interface
class Dog implements Animal {
  name: string;
  age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    makeSound(): void {
        console.log('Woof! Woof!');
    }
}


// 2. Extending interfaces and so on ... not for now
