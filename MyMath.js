class MyMath {
  static sum = (...numbers) => numbers.reduce((acc, number) => acc + number);
  static subtract = (...numbers) =>
    numbers.reduce((acc, number) => acc - number);
  static multiply = (...numbers) =>
    numbers.reduce((acc, number) => acc * number);
  static divide = (...numbers) => numbers.reduce((acc, number) => acc / number);
}

const value = false;

const PI = 3.14;

// const module = {
//   exports: {}
// }

console.log('MyMath.js');

// CommonJS exports
// именной экспорт, может использоватся многократно в файле
module.exports.MyMath = MyMath;
module.exports.PI = PI;