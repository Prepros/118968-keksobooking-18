'use strict';

// Случайное число
var randomVal = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерация случайных чисел
var genericRandomNumber  = function (minVal, maxVal, size) {
  if (!minVal || minVal <= 0) {
    minVal = 1;
  }

  if (!maxVal || maxVal <= 0) {
    maxVal = 1;
  }

  if (!size || size <= 0) {
    size = maxVal;
  }

  if (maxVal < size) {
    maxVal = size;
  }

  var arrayNumbers = [];

  while(arrayNumbers.length < size) {
    var number = String(randomVal(minVal, maxVal));

    if (number.length === 1) {
      number = '0' + number;
    }

    if (arrayNumbers.indexOf(number) === -1) {
      arrayNumbers.push(number);
    }
  }

  return arrayNumbers;
};





