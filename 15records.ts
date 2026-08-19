// Records
// dictionary ?

type UserAges = Record<string, number>;

const userAges: UserAges = {
  "Alice": 30,
  "Bob": 25,
  "Charlie": 35
};

console.log(userAges);
console.log(userAges["Alice"]); // Output: 30


// index signature equivalent
type UserAges2 = { 
    [mykey: string]: number; 
};