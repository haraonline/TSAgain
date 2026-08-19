// avoid using as per the instructor
// if you use, prefer const enum over enum for performance reasons
// consider cost object (object literal marked as const) over enum for better tree-shaking 
// and smaller bundle size ...

const Colors = {
  Red: "Red",
  Green: "Green",
  Blue: "Blue",
} as const;

// returns a union of the values of the Colors object (e.g: color : "Red" | "Green" | "Blue")
function printColors(color: keyof typeof Colors) {
  console.log(color)
}

printColors("Red"); //  Valid usage
// printColors("Yellow"); // Invalid usage, TypeScript will throw an error
