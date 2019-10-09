'use strict';

(function () {
  // Размер карты
  var sizeMap = {
    width: {
      min: 0,
      max: window.dom.map.mapPins.offsetWidth
    },
    height: {
      min: 130,
      max: 630
    }
  };


  // Размеры пина объявления
  var sizePin = {
    width: 50,
    height: 70
  };


  // Генерация чисел 01 - 08 / 10 - 18 / n0 - n8 кроме 9
  var generateNumber = function (minVal, maxVal) {
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
  var generateAvatar = function (numbers) {
    var avatars = [];

    for (var i = 0; i < numbers.length; i++) {
      avatars.push('img/avatars/user' + numbers[i] + '.png');
    }

    return avatars;
  };


  // Генерация заголовков предложения
  var generateTitleOffer = function (count) {
    if (!count) {
      count = 1;
    }

    var titles = [];

    for (var i = 1; i <= count; i++) {
      titles.push(window.util.randomString(window.util.randomVal(10, 20)));
    }

    return titles;
  };


  // Генерация адреса предложения
  var generateAddressOffer = function (count) {
    if (!count) {
      count = 1;
    }

    var address = [];

    for (var i = 1; i <= count; i++) {
      address.push(window.util.randomVal(0, 600) + ', ' + window.util.randomVal(0, 600));
    }

    return address;
  };


  // Генерация стоимости предложения
  var generatePriceOffer = function (count) {
    if (!count) {
      count = 1;
    }

    var prices = [];

    for (var i = 1; i <= count; i++) {
      prices.push(window.util.randomVal(5000, 100000));
    }

    return prices;
  };


  // Генерация типа здания
  var generateTypeOffer = function (count) {
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
      var randomType = types[window.util.randomVal(0, types.length - 1)];
      typesList.push(randomType);
    }

    return typesList;
  };


  // Генерация количества гостей
  var generateGuestsOffer = function (count) {
    if (!count) {
      count = 1;
    }

    var guests = [];

    for (var i = 1; i <= count; i++) {
      guests.push(window.util.randomVal(1, 20));
    }

    return guests;
  };


  // Генерация количества комнат
  var generateRoomOffer = function (count) {
    if (!count) {
      count = 1;
    }

    var rooms = [];

    for (var i = 1; i <= count; i++) {
      rooms.push(window.util.randomVal(1, 10));
    }

    return rooms;
  };


  // Генерация времени регистрации/выселения
  var generateCheckOffer = function (count) {
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
      var randomCheckin = checkin[window.util.randomVal(0, checkin.length - 1)];
      checkinList.push(randomCheckin);
    }

    return checkinList;
  };


  // Генерация услуг
  var generateFeatureOffer = function (count) {
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

    for (var i = 0; i < count; i++) {
      var featuresCount = window.util.randomVal(1, features.length);
      featuresList[i] = [];

      for (var j = 0, key = 0; j < featuresCount; j++) {
        var featuresRandom = window.util.randomVal(0, features.length - 1);

        var item = features[featuresRandom];

        if (featuresList[i].indexOf(item) === -1) {
          featuresList[i][key] = item;
          key++;
        }
      }
    }

    return featuresList;
  };


  // Генерация фотографий
  var generatePhotoOffer = function (count) {
    if (!count) {
      count = 1;
    }

    var photos = [];

    for (var i = 1; i <= 3; i++) {
      photos.push('http://o0.github.io/assets/images/tokyo/hotel' + i + '.jpg');
    }

    var photosList = [];

    for (i = 0; i < count; i++) {
      var photosCount = window.util.randomVal(1, photos.length);
      photosList[i] = [];

      for (var j = 0, key = 0; j < photosCount; j++) {
        var photosRandom = window.util.randomVal(0, photos.length - 1);

        var item = photos[photosRandom];

        if (photosList[i].indexOf(item) < 0) {
          photosList[i][key] = item;
          key++;
        }
      }
    }

    return photosList;
  };


  // Генерация описания
  var generateDescriptionOffer = function (count) {
    if (!count) {
      count = 1;
    }

    var descriptions = [];

    for (var i = 1; i <= count; i++) {
      descriptions.push(window.util.randomString(window.util.randomVal(100, 500)));
    }

    return descriptions;
  };


  // Генерация локационных данных
  var generateLocation = function (count) {
    if (!count) {
      count = 1;
    }


    // Координаты пинов
    var locations = [];

    // Задаем случайниые координаты для пинов объявлений
    for (var i = 0; i < count; i++) {
      locations[i] = [];
      locations[i]['x'] = window.util.randomVal(sizeMap.width.min, sizeMap.width.max);
      locations[i]['y'] = window.util.randomVal(sizeMap.height.min, sizeMap.height.max);
    }

    // Координаты относительно нижней центральной точки
    locations.x = Math.floor(locations.x - (sizePin.width / 2));
    locations.y = locations.y - sizePin.height;

    return locations;
  };


  // Генерация объявлений
  var generateOffer = function (countOffer) {
    if (!countOffer || countOffer <= 0) {
      countOffer = 8;
    }

    // Данные
    var avatars = generateAvatar(generateNumber(1, countOffer));
    var titles = generateTitleOffer(countOffer);
    var address = generateAddressOffer(countOffer);
    var prices = generatePriceOffer(countOffer);
    var types = generateTypeOffer(countOffer);
    var rooms = generateRoomOffer(countOffer);
    var guests = generateGuestsOffer(countOffer);
    var checkin = generateCheckOffer(countOffer);
    var checkout = generateCheckOffer(countOffer);
    var features = generateFeatureOffer(countOffer);
    var descriptions = generateDescriptionOffer(countOffer);
    var photos = generatePhotoOffer(countOffer);
    var locations = generateLocation(countOffer);

    var offer = [];

    for (var i = 0; i < countOffer; i++) {
      offer[i] = {
        'author': {
          'avatar': avatars[i]
        },

        'offer': {
          'title': titles[i],
          'address': address[i],
          'price': prices[i],
          'type': types[i],
          'rooms': rooms[i],
          'guests': guests[i],
          'checkin': checkin[i],
          'checkout': checkout[i],
          'features': features[i],
          'description': descriptions[i],
          'photos': photos[i]
        },

        'location': {
          'x': locations[i]['x'],
          'y': locations[i]['y']
        }
      };
    }

    return offer;
  };


  window.data = {
    generateOffer: generateOffer,
    sizeMap: sizeMap,
    sizePin: sizePin
  };
})();
