// this keyword

const person = {
  name: "John",
  age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// calling the greet method
person.greet(); // Output: Hello, my name is John and I am 30 years old.


// using this in a method (use the call method to set the context of this)
const user = {"name": "Alice", "age": 25};

function displayUserInfo(this: { name: string; age: number }) {
    console.log(`User Name: ${this.name}, Age: ${this.age}`);
}

displayUserInfo.call(user); // Output: User Name: Alice, Age: 25