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
    titles.push(randomOffer(randomVal(10, 20)));
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
    address.push(randomVal(0, 600) + ', ' + randomVal(0, 600));
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
    prices.push(randomVal(5000, 100000));
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
    var randomType = types[randomVal(0, types.length - 1)];
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
    guests.push(randomVal(1, 20));
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
    rooms.push(randomVal(1, 10));
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
    var randomCheckin = checkin[randomVal(0, checkin.length - 1)];
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
var generatePhotoOffer = function (count) {
  if (!count) {
    count = 1;
  }

  var photos = [];

  for (var i = 1; i <= 10; i++) {
    photos.push('http://o0.github.io/assets/images/tokyo/hotel' + i + '.jpg');
  }

  var photosList = [];

  for (i = 0; i < count; i++) {
    var photosCount = randomVal(1, photos.length);
    photosList[i] = [];

    for (var j = 0, key = 0; j < photosCount; j++) {
      var photosRandom = randomVal(0, photos.length - 1);

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
    descriptions.push(randomOffer(randomVal(100, 500)));
  }

  return descriptions;
};


// Генерация локационных данных
var generateLocation = function (count) {
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


// Отрисовка объявлений
var renderCard = function (offer) {
  var templateCard = document.querySelector('#card').content;
  var mapCard = templateCard.querySelector('.map__card');

  var itemCard = mapCard.cloneNode(true);
  var title = itemCard.querySelector('.popup__title');
  var address = itemCard.querySelector('.popup__text--address');
  var price = itemCard.querySelector('.popup__text--price');
  var type = itemCard.querySelector('.popup__type');
  var roomsGuest = itemCard.querySelector('.popup__text--capacity');
  var checkInOut = itemCard.querySelector('.popup__text--time');

  var featureList = itemCard.querySelector('.popup__features');
  var featureItem = featureList.querySelectorAll('.popup__feature');

  var description = itemCard.querySelector('.popup__description');
  var avatar = itemCard.querySelector('.popup__avatar');
  var photos = itemCard.querySelector('.popup__photos');

  // Заголовок
  title.textContent = offer.offer.title;

  // Адрес
  address.textContent = offer.offer.address;

  // Цена
  price.textContent = offer.offer.price + '₽/ночь';

  // Тип здания
  switch (offer.offer.type) {
    case 'flat':
      type.textContent = 'Квартира';
      break;
    case 'bungalo':
      type.textContent = 'Бунгало';
      break;
    case 'house':
      type.textContent = 'Дом';
      break;
    case 'palace':
      type.textContent = 'Дворец';
      break;
  }

  // Количество комнат и гостей

  roomsGuest.textContent = offer.offer.rooms + ' комнаты для ' + offer.offer.guests + ' гостей';

  // Время заезда и выезда
  checkInOut.textContent = 'Заезд после ' + offer.offer.checkin + ', выезд до ' + offer.offer.checkout;

  // Услуги
  for (var i = 0; i < featureItem.length; i++) {
    var feature = featureItem[i];

    for (var j = 0; j < offer.offer.features.length; j++) {
      var featureMode = 'popup__feature--' + offer.offer.features[j];

      if (!feature.classList.contains(featureMode)) {
        feature.classList.toggle('hidden');
      }
    }
  }

  // Описание
  description.textContent = offer.offer.description;

  // Фотографии номера
  while (photos.firstChild) {
    photos.removeChild(photos.firstChild);
  }

  for (i = 0; i < offer.offer.photos.length; i++) {
    var photoItem = document.createElement('img');
    photoItem.classList.add('popup__photo');
    photoItem.src = offer.offer.photos[i];
    photoItem.width = 45;
    photoItem.height = 40;
    photoItem.alt = offer.offer.title;
    photos.appendChild(photoItem);
  }

  // Аватар
  avatar.src = offer.author.avatar;

  return itemCard;
};

// Добавление меток
var addPin = function (offers) {
  for (var i = 0; i < offers.length; i++) {
    var mapItem = renderPin(offers[i]);
    mapList.appendChild(mapItem);
  }
};

// Добавление объявления
var addCard = function (offers) {
  for (var i = 0; i < offers.length; i++) {
    var cardItem = renderCard(offers[i]);
    mapFilterContainer.insertAdjacentElement('beforebegin', cardItem);
  }
};

// Начало программы
var map = document.querySelector('.map');
var mapList = map.querySelector('.map__pins');
var mapFilterContainer = map.querySelector('.map__filters-container');

map.classList.remove('map--faded');

var offers = generateOffer(8);

addPin(offers);
addCard(offers);
