class MyMath {
  static sum = (...numbers) => numbers.reduce((acc, number) => acc + number);
  static subtract = (...numbers) =>
    numbers.reduce((acc, number) => acc - number);
  static multiply = (...numbers) =>
    numbers.reduce((acc, number) => acc * number);
  static divide = (...numbers) => numbers.reduce((acc, number) => acc / number);
}