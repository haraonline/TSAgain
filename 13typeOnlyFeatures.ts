// type vs interface
// type only features
// how to choose between type and interface
// both can describe a function signature

type UserType = {
  name: string;
  age: number;
};

interface UserInterface {
  name: string;
  age: number;
}

// type alias for a function signature
type UserFunctionType = (name: string, age: number) => void;

// interface for a function signature
interface UserFunctionInterface {
  (name: string, age: number): void;
}


// where only type can be used

// 1. type alias for primitive types
type ID = string | number;

// 2. type alias for union types
type Status = 'active' | 'inactive' | 'pending';

// 3. type alias for tuple types
type Point = [number, number];

// 4. type intersection types
type Admin = UserType & { role: string };
type SuperAdmin = Admin & { permissions: string[] };

// 5. Mapped types // Utility types (create new types based on an interface (or type))
interface Customer {
  name: string;
  age: number;
  email: string;
}

type ReadonlyCustomer = Readonly<Customer>;
const readOnlyCustomer: ReadonlyCustomer = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
};

// 06. Typed arrays
type Customers = Customer[]; // array of Customer objects