'use strict';
// node ./path/to/file.js - запуск файла с помощью node js

// CommonJS imports
const result = require('./MyMath');
const { Component } = require('./Component');

require('./src');
const { MyMath, PI } = result;

console.log('index.js');

const value = 'some value';
// const value = 'some value';

// console.log(MyMath.sum(5,10,20,30));
// console.log(MyMath.divide(500,2));

/*
  Этапы работы require
    1. resolve - ищется файл
      1.1 нода подключает модули ядра (Globals)
      1.2 ищет файл по предоставленому пути
        1.2.1 ищет файл с расширением .js
        1.2.2 ищет файл с расширением .json
      1.3 ищется папка по предоставленному пути
        1.3.1 ищет в папке файл package.json и в нем свойство "main"
        1.3.2 иначе ищет файл index.js | index.json
      1.4 ищется папка node_modules
      1.5 кидает ошибку
    2. loading - файл читается
    3. wrapping - нода оборачивает файл в функцию, в неё также передают инжектированные переменные
    4. evaluation - запускает весь код в файле (функцию из пункта 3)
    5. caching - результат работы из пункта 4 сохраняется с данными которые отдаются на экспорт. Код каждого файла запускается не более одного раза.
*/
