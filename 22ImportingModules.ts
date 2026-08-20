// alias for imports : import { Product as MyProduct } from './21Modules';
import type { Product } from './21Modules';
import { calculateTotal } from './21Modules';

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Smartphone', price: 499.99 },
];

const total = calculateTotal(products);
console.log(total);