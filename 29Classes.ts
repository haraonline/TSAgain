// TSCONFIG SETTING TO WATCH : "strictPropertyInitialization": true / false    
// WITH A CONSTRUCTOR
class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.


// WITHOUT A CONSTRUCTOR
class User {
    public username : string = "";
    public email : string = "";
    public country : string = "";   
}

const user1 = new User();
user1.username = "john_doe";
user1.email = "john_doe@example.com";

console.log(user1.username, user1.email); // Output: john_doe john_doe@example.com