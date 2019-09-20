'use strict';

// Случайное число
var randomVal = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


// Случайная строка
var randomOffer = function (lenghtOffer) {
  if (!lenghtOffer || lenghtOffer <= 0) {
    lenghtOffer = 250;
  }

  var letterEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var letterRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
  var letterNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var letterSymb = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];
  var abc = [
    letterEn,
    letterRu,
    letterNum,
    letterSymb
  ];

  var str = '';

  for (var i = 0; i < lenghtOffer; i++) {
    var abcRandom = abc[randomVal(0, abc.length - 1)];
    var letterRandom = abcRandom[randomVal(0, abcRandom.length - 1)];

    str += String(letterRandom);
  }

  return str;
};


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
var genericAvatar = function (numbers) {
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
    titles.push(randomOffer(randomVal(10, 20)));
  }

  return titles;
};


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
};


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
};


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
};


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
};


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
};


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
};


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

  for (var i = 0; i < count; i++) {
    var featuresCount = randomVal(1, features.length);
    featuresList[i] = [];

    for (var j = 0, key = 0; j < featuresCount; j++) {
      var featuresRandom = randomVal(0, features.length - 1);

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
var genericPhotoOffer = function (count) {
  if (!count) {
    count = 1;
  }

  var photos = [];

  for (var i = 1; i <= count; i++) {
    photos.push('http://o0.github.io/assets/images/tokyo/hotel' + i + '.jpg');
  }

  return photos;
};


// Генерация описания
var genericDescriptionOffer = function (count) {
  if (!count) {
    count = 1;
  }

  var descriptions = [];

  for (var i = 1; i <= count; i++) {
    descriptions.push(randomOffer(randomVal(100, 500)));
  }

  return descriptions;
};


// Генерация локационных данных
var genericLocation = function (count) {
  if (!count) {
    count = 1;
  }

  var width = mapList.offsetWidth;

  var locations = [];

  for (var i = 0; i < count; i++) {
    locations[i] = [];
    locations[i]['x'] = randomVal(0, width);
    locations[i]['y'] = randomVal(130, 630);
  }

  return locations;
};


// Генерация объявлений
var genericOffer = function (countOffer) {
  if (!countOffer || countOffer <= 0) {
    countOffer = 8;
  }

  // Данные
  var avatars = [genericAvatar(genericNumber(1, countOffer))];
  var titles = [genericTitleOffer(countOffer)];
  var address = [genericAddressOffer(countOffer)];
  var prices = [genericPriceOffer(countOffer)];
  var types = [genericTypeOffer(countOffer)];
  var rooms = [genericRoomOffer(countOffer)];
  var guests = [genericGuestsOffer(countOffer)];
  var checkin = [genericCheckOffer(countOffer)];
  var checkout = [genericCheckOffer(countOffer)];
  var features = [genericFeatureOffer(countOffer)];
  var descriptions = [genericDescriptionOffer(countOffer)];
  var photos = [genericPhotoOffer(countOffer)];
  var locations = [genericLocation(countOffer)];

  var offer = [];

  for (var i = 0; i < countOffer; i++) {
    offer[i] = {
      'author': {
        'avatar': avatars[0][i]
      },

      'offer': {
        'title': titles[0][i],
        'address': address[0][i],
        'price': prices[0][i],
        'type': types[0][i],
        'rooms': rooms[0][i],
        'guests': guests[0][i],
        'checkin': checkin[0][i],
        'checkout': checkout[0][i],
        'features': features[0][i],
        'description': descriptions[0][i],
        'photos': photos[0][i]
      },

      'location': {
        'x': locations[0][i]['x'],
        'y': locations[0][i]['y']
      }
    };
  }

  return offer;
};


// Отрисовка меток
var renderPin = function (offer) {
  var templatePin = document.querySelector('#pin').content;
  var mapPin = templatePin.querySelector('.map__pin');

  var itemPin = mapPin.cloneNode(true);
  var img = itemPin.querySelector('img');

  // var itemPinWidth = itemPin.offsetWidth;
  // var itemPinHeight = itemPin.offsetHeight;

  var itemPinWidth = 50;
  var itemPinHeight = 70;

  offer.location.x = Math.floor(offer.location.x - (itemPinWidth / 2));
  offer.location.y = offer.location.y - itemPinHeight;

  itemPin.setAttribute('style', 'left: ' + offer.location.x + 'px; top: ' + offer.location.y + 'px;');
  img.src = offer.author.avatar;
  img.alt = offer.offer.title;

  return itemPin;
};

// Добавление меток
var addPin = function () {
  var offers = genericOffer(8);

  for (var i = 0; i < offers.length; i++) {
    var mapItem = renderPin(offers[i]);
    mapList.appendChild(mapItem);
  }
};

// Начало программы
var map = document.querySelector('.map');
var mapList = map.querySelector('.map__pins');

map.classList.remove('map--faded');

addPin();
