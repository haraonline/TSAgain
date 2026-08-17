// unknown : safer than any

let value: unknown = 30;
value = "thirty"; // now value is a string

// Type assertion is required to perform operations on unknown type
if (typeof value === "string") {
    console.log(value.toUpperCase());
}

