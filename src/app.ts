import _ from 'lodash';

import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

import { Product } from './product.model';

declare var GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);

// No Types Needed: class-transformer

const products = [
  { title: 'A car', price: 1000 },
  { title: 'A computer', price: 800 },
];

// manual way to convert API data to class

// const loadedProducts = products.map(product => {
//   return new Product(product.title, product.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const product of loadedProducts) {
  console.log(product.getInformation());
}
