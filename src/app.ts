import { Product } from './product.model';

import _ from 'lodash';

declare var GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);

// No Types Needed: class-transformer

const products = [
  { title: 'A car', price: 1000 },
  { title: 'A computer', price: 800 },
];

const product1 = new Product('book', 12.99);
console.log(product1.getInformation());
