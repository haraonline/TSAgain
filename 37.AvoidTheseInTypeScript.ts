// Avoid these in TypeScript

// 1. Enums - use a plain object or a union type instead of
//    enums for better type safety and performance.
// 2. Namespaces - use ES modules instead of namespaces for better 
//    modularity and compatibility with modern JavaScript tooling.
// 3. Class parameter properties (avoid parameter properties in constructors directly
//    as they can lead to confusion and less readable code).
//    declare the properties explicitly in the class body (and then a constructor)
//    instead of using parameter properties directly in the constructor.

// The corresponding tsconfig.json settings for the above are:
// {
//   "compilerOptions": {
//     "erasableSyntaxOnly": true, // when true, allows certain syntax
//                                     to be erased during compilation
//   }
// }