// the implements keyword is used to indicate 
// that a class implements an interface. 
// It ensures that the class adheres to the structure defined by the interface,
// providing type safety and enforcing the implementation of required 
// methods and properties.

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Woof! Woof!");
  }
}


// extends keyword is used to create a new class that 
// inherits properties and methods from an existing class.

class Vehicle {
  vehicleType: string;
  vehicleModel: string;
  vehicleMake: string;

  constructor(vehicleType: string, vehicleModel: string, vehicleMake: string) {
    this.vehicleType = vehicleType;
    this.vehicleModel = vehicleModel;
    this.vehicleMake = vehicleMake;
  }

  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  
    // construction is not necessary here since we are 
    // not adding any new properties or methods to the Car class.

  start() {
    console.log("Car started");
  }
}

