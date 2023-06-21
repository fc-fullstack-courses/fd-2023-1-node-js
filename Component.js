const { MyMath } = require('./MyMath.js');

class Component {
  render() {
    return 'Component rendered';
  }
}

console.log('Component.js');

MyMath.divide(5,5);

module.exports.Component = Component;
