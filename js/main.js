'use strict';

// Случайное число
var randomVal = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Генерация чисел 01 - 08 / 10 - 18 / n0 - n8 кроме 9
var genericNumber = function (minVal, maxVal) {
  var arrayNumbers = [];

  for (var i = minVal, str = ''; i <= maxVal; i++) {
    str = String(i);

    if (str.length === 1 && i !== 9) {
      arrayNumbers.push('0' + str);
    }

    if (str.length > 1 && str.indexOf('9') === -1) {
      arrayNumbers.push(str);
    }
  }

  return arrayNumbers;
};


// Генерация адреса аватара
var genericPathAvatar = function (numbers) {
  var avatars = [];

  for (var i = 0; i < numbers.length; i++) {
    avatars.push('img/avatars/user' + numbers[i] + '.png');
  }

  return avatars;
};


// Генерация заголовков предложения
var genericTitleOffer = function (count) {
  if (!count) {
    count = 1;
  }

  var titles = [];

  for (var i = 1; i <= count; i++) {
    titles.push('Заголовок предложения ' + i);
  }

  return titles;
}


// Генерация адреса предложения
var genericAddressOffer = function (count) {
  if (!count) {
    count = 1;
  }

  var address = [];

  for (var i = 1; i <= count; i++) {
    address.push(randomVal(0, 600) + ', ' + randomVal(0, 600));
  }

  return address;
}


// Генерация стоимости предложения
var genericPriceOffer = function (count) {
  if (!count) {
    count = 1;
  }

  var prices = [];

  for (var i = 1; i <= count; i++) {
    prices.push(randomVal(5000, 100000));
  }

  return prices;
}


// Генерация типа здания
var genericTypeOffer = function (count) {
  if (!count) {
    count = 1;
  }

  var types = [
    'palace',
    'flat',
    'house',
    'bungalo'
  ];

  var typesList = [];

  for (var i = 1; i <= count; i++) {
    var randomType = types[randomVal(0, types.length - 1)];
    typesList.push(randomType);
  }

  return typesList;
}


// Генерация количества гостей
var genericGuestsOffer = function (count) {
  if (!count) {
    count = 1;
  }

  var guests = [];

  for (var i = 1; i <= count; i++) {
    guests.push(randomVal(1, 20));
  }

  return guests;
}


// Генерация количества комнат
var genericRoomOffer = function (count) {
  if (!count) {
    count = 1;
  }

  var rooms = [];

  for (var i = 1; i <= count; i++) {
    rooms.push(randomVal(1, 10));
  }

  return rooms;
}


// Генерация времени регистрации/выселения
var genericCheckOffer = function (count) {
  if (!count) {
    count = 1;
  }

  var checkin = [
    '12:00',
    '13:00',
    '14:00'
  ];

  var checkinList = [];

  for (var i = 1; i <= count; i++) {
    var randomCheckin = checkin[randomVal(0, checkin.length - 1)];
    checkinList.push(randomCheckin);
  }

  return checkinList;
}


// Генерация услуг
var genericFeatureOffer = function (count) {
  if (!count) {
    count = 1;
  }

  var features = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ];

  var featuresList = [];
  var featuresItem = [];

  for (var i = 0; i < count; i++) {
    var featuresCount = randomVal(1, features.length);

    for (var j = 0; j < featuresCount; j++) {
      var featuresRandom = randomVal(0, features.length - 1);

      var item = features[featuresRandom];

      if (featuresItem.indexOf(item) === -1) {
        featuresItem.push(item);
      }
    }

    featuresList.push(featuresItem);
  }

  return featuresList;
}


var countOffer = 8;

// Данные
var avatars = [
  genericPathAvatar(genericNumber(1, countOffer))
];

var titles = [
  genericTitleOffer(countOffer)
];

var address = [
  genericAddressOffer(countOffer)
];

var prices = [
  genericPriceOffer(countOffer)
];

var types = [
  genericTypeOffer(countOffer)
];

var rooms = [
  genericRoomOffer(countOffer)
];

var guests = [
  genericGuestsOffer(countOffer)
];

var checkin = [
  genericCheckOffer(countOffer)
];

var checkout = [
  genericCheckOffer(countOffer)
];

var features = [
  genericFeatureOffer(countOffer)
];

console.log(features);



