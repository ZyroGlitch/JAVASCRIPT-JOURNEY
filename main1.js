// ES6 MODULES - make a file that reusable to other js files
console.log('ES6 MODULES');

import { Add, Subtract, Multiply, Divide } from './module.js';

const add = Add(20, 50);
const minus = Subtract(50, 20);
const multiply = Multiply(5, 10);
const divide = Divide(30, 3);

console.log(`Addition result : ${add}`);
console.log(`Subtraction result : ${minus}`);
console.log(`Multiplication result : ${multiply}`);
console.log(`Division result : ${divide}`);