// Access any standard global variable in TypeScript
window.console.log("Hello, World!");

// Access the custom global variable defined in 27Globals.ts
window.username = "JohnDoe";

// globalThis works in both browser and Node environments
globalThis.window.username = "JaneDoe";