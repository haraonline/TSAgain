// type intersections
// best used in objects instead of primitives

type User = {name : string}
type Admin = {role : string}

type UserAdmin = User & Admin;

const user1: UserAdmin = {
    name : "Max",
    role: "Admin",
};

console.log(user1.name)
console.log(user1.role)