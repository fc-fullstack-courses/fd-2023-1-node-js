'use strict';

// CommonJS imports
// const result = require('./MyMath');
// const { Component } = require('./Component');
// require('./src');
// const { MyMath, PI } = result;

const fs = require('fs/promises');
// const fs2 = require('fs').promises;

// console.log(fs);

// fs.readFile('./require_working_algo.txt').then((fileContent) => {
//   const decodedText = Buffer.from(fileContent, 'utf-8').toString();
//   console.log(decodedText);
// });

// fs.readFile('./require_working_algo.txt', { encoding: 'utf-8' }).then(
//   (fileContent) => {
//     console.log(fileContent);
//   }
// );

fs.readFile('./require_working_algo.txt', 'utf-8').then((fileContent) => {
  console.log(fileContent);
});

