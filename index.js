'use strict';

console.log(5 + 5);

const sum = (...numbers) => numbers.reduce((acc, number) => acc + number);

console.log(sum(2, 5, 7, 10));
