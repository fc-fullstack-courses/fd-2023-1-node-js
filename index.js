'use strict';

// CommonJS imports
// const result = require('./MyMath');
// const { Component } = require('./Component');
// require('./src');
// const { MyMath, PI } = result;

const fs = require('fs/promises');
const _ = require('lodash');
// const fs2 = require('fs').promises;

// console.log(fs);

const randomNumber = _.random(5, 5000);
console.log(randomNumber);

// fs.readFile('./require_working_algo.txt').then((fileContent) => {
//   const decodedText = Buffer.from(fileContent, 'utf-8').toString();
//   console.log(decodedText);
// });

// fs.readFile('./require_working_algo.txt', { encoding: 'utf-8' }).then(
//   (fileContent) => {
//     console.log(fileContent);
//   }
// // );

// fs.readFile('./require_working_algo.txt', 'utf-8').then((fileContent) => {
//   // console.log(fileContent);

//   const newText = `${fileContent}\nLorem Ipsum`;

//   fs.writeFile('./require_working_algo.txt', newText, 'utf-8');
// });

/*
  1. создать текстовый файлик, написать в нем что-то и с помощью ноды прочитать его содержимое

  2. Создайте новую переменную с значением текста из файла, к которому добавили
  в конец lorem ipsum. Сохраните новый текст в файл используя js.
*/

const obj = {};

const newText = obj + 'Lorem';
