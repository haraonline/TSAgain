// modules
// -- a module is a file that contains at least one top-level import or export statement.
// -- without export the code in a module is private to that module and cannot be
// -- accessed from other modules.
// -- import means bringing in code from another module, while export means 
// -- making code available to be imported by other modules.

// import and export types
export type Product = {
  id: number;
  name: string;
  price: number;
  description?: string; // optional property
};

export function calculateTotal(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}




// ambient types
// namespaces
// globals