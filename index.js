'use strict';
// node ./path/to/file.js - запуск файла с помощью node js

// CommonJS imports
const result = require('./MyMath.js');
const { MyMath, PI } = result;

console.log(PI);

const value = 'some value';
// const value = 'some value';

console.log(MyMath.sum(5,10,20,30));
console.log(MyMath.divide(500,2));
