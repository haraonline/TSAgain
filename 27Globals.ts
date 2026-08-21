// Declare a global variable in TypeScript
// Reference a gobal variable from a different file
// Other global types like functions are also possible ...

declare global {

    interface Window {
      username: string;
    }
}
