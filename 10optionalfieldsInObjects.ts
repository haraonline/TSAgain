type User = {
    name: string;
    age?: number;
}

// since age is optional, we can omit it
const adam: User = {
    name: "Adam",
}

const alice: User = {
    name: "Alice",
    age: undefined
}


console.log(adam.name)
console.log(adam.age)


type Customer = {
    name: string;
    age: number | undefined
}

const bob: Customer = {
    name: "bob",
    age: undefined // errors if the age property is omitted.
    //  numbers and undefined are allowed. this is not commonly used though
}


// many optional fields
type UserInfo = {
    name: string;
    age: number;
    city?: string;
    postalcode?: string;
    country?: string;
}

// a better approach.try to group related fields together in an object. 
// the address field is optional, but if it is present,
// it must contain the city, postalcode, and country fields.
type UserInfo2 = {
    name: string;
    age: number;
    address?: {
        city: string;
        postalcode: string;
        country: string;
    }
}