const { MyMath } = require('./MyMath.js');

class Component {
  render() {
    return 'Component rendered';
  }

  static test = 12345;
}

console.log('Component.js');

MyMath.divide(5, 5);

// CommonJS экспорт
module.exports = Component; // экспортирование по умолчанию
// module.exports = 45; // используется не более 1 раза за модуль
