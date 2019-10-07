'use strict';

// *****************************
// Функции для генерации данных
// *****************************

// Случайное число
var randomVal = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


// Случайная строка
var randomString = function (lenghtOffer) {
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

  for (var i = 0, j = 0; i < lenghtOffer; i++, j++) {
    var abcRandom = abc[randomVal(0, abc.length - 1)];
    var letterRandom = abcRandom[randomVal(0, abcRandom.length - 1)];

    if (j === 5) {
      str += ' ';
      j = 0;
    }

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
    titles.push(randomString(randomVal(10, 20)));
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
    descriptions.push(randomString(randomVal(100, 500)));
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


// *****************************
// Отрисовка элементов на странице
// *****************************

// Отрисовка меток
var renderPin = function (offer) {
  var templatePin = document.querySelector('#pin').content;
  var mapPin = templatePin.querySelector('.map__pin');

  var itemPin = mapPin.cloneNode(true);
  var img = itemPin.querySelector('img');

  var itemPinWidth = 50;
  var itemPinHeight = 70;

  itemPin.setAttribute('tabindex', 0);

  offer.location.x = Math.floor(offer.location.x - (itemPinWidth / 2));
  offer.location.y = offer.location.y - itemPinHeight;

  itemPin.setAttribute('style', 'left: ' + offer.location.x + 'px; top: ' + offer.location.y + 'px;');
  img.src = offer.author.avatar;
  img.alt = offer.offer.title;

  itemPin.addEventListener('click', function (evt) {
    evt.preventDefault();

    addCard(offer);

    itemPin.classList.add('map__pin--active');
  });

  return itemPin;
};


// Отрисовка объявлений
var renderCard = function (offer) {
  var templateCard = document.querySelector('#card').content;
  var mapCard = templateCard.querySelector('.map__card');

  var itemCard = mapCard.cloneNode(true);
  var closeButton = itemCard.querySelector('.popup__close');
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

  var closePopup = function () {
    var mapPin = document.querySelector('.map__pin--active');

    itemCard.remove();
    mapPin.classList.remove('map__pin--active');

    document.removeEventListener('keydown', onEscPress);
  };

  var onEscPress = function (evt) {
    if (evt.keyCode === ESC_KEY) {
      closePopup();
    }
  };

  // Кнопка закрыть у объявления
  closeButton.addEventListener('click', function () {
    closePopup();
  });

  document.addEventListener('keydown', onEscPress);

  return itemCard;
};


// *****************************
// Добавляем элементы на страницу
// *****************************

// Создаем метки
var createPin = function (offers) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < offers.length; i++) {
    var mapItem = renderPin(offers[i]);
    fragment.appendChild(mapItem);
  }

  return fragment;
};

// Добавляем метки
var addPin = function (pins) {
  mapList.appendChild(pins);
};

// Добавление объявления
var addCard = function (offer) {
  removeCard();

  var fragment = document.createDocumentFragment();

  var cardItem = renderCard(offer);
  fragment.appendChild(cardItem);

  mapFilterContainer.before(fragment);
  document.querySelector('.popup__close').focus();
};

// Удаление объявления
var removeCard = function () {
  var mapCard = map.querySelector('.map__card');

  if (mapCard) {
    mapCard.remove();
  }
};


// *****************************
// Функции настройки страницы
// *****************************

// Переключаем состояние страницы (активная / не активная)
var checkStatePage = function (statePage) {
  if (statePage) {
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');

    for (var i = 0; i < mapFilterSelects.length; i++) {
      mapFilterSelects[i].removeAttribute('disabled');
    }

    for (i = 0; i < mapFilterFieldsets.length; i++) {
      mapFilterFieldsets[i].removeAttribute('disabled');
    }

    for (i = 0; i < adFormFieldsets.length; i++) {
      adFormFieldsets[i].removeAttribute('disabled');
    }
  } else {
    for (i = 0; i < mapFilterSelects.length; i++) {
      mapFilterSelects[i].setAttribute('disabled', true);
    }

    for (i = 0; i < mapFilterFieldsets.length; i++) {
      mapFilterFieldsets[i].setAttribute('disabled', true);
    }

    for (i = 0; i < adFormFieldsets.length; i++) {
      adFormFieldsets[i].setAttribute('disabled', true);
    }
  }
};


// Устанавливаем координаты главной метки
var setLocatePinMain = function (statePage) {
  var locatePinMain = {
    x: null,
    y: null
  };

  // Если страница активна координаты от центра метки
  // Если страница не активна координаты от нижней стороны метки
  if (statePage) {
    // Высота заостренного элемента метки
    var pinMainDownHeight = parseInt(window.getComputedStyle(mapPinMain, '::after').height, 10);

    locatePinMain.x = Math.floor(mapPinMain.offsetLeft + (mapPinMain.offsetWidth / 2));
    locatePinMain.y = Math.floor(mapPinMain.offsetTop + mapPinMain.offsetHeight + pinMainDownHeight);
  } else {
    locatePinMain.x = Math.floor(mapPinMain.offsetLeft + (mapPinMain.offsetWidth / 2));
    locatePinMain.y = Math.floor(mapPinMain.offsetTop + (mapPinMain.offsetHeight / 2));
  }

  // Записываем координаты в поле адрес
  var address = adForm.querySelector('#address');
  address.value = 'x: ' + locatePinMain.x + '; y: ' + locatePinMain.y;
};


// Соотношение типа жилья с ценой
var setTypeHousePrice = function () {
  var selectedTypeHouse = typeHouse.options[typeHouse.options.selectedIndex];

  switch (selectedTypeHouse.value) {
    case 'bungalo':
      priceHouse.placeholder = 0;
      priceHouse.setAttribute('min', 0);
      break;
    case 'flat':
      priceHouse.placeholder = 1000;
      priceHouse.setAttribute('min', 1000);
      break;
    case 'house':
      priceHouse.placeholder = 5000;
      priceHouse.setAttribute('min', 5000);
      break;
    case 'palace':
      priceHouse.placeholder = 10000;
      priceHouse.setAttribute('min', 10000);
      break;
  }
};


// Соотношение количества комнат с количеством мест
var setRoomsCapacity = function () {
  var roomsHouse = adForm.querySelector('#room_number');
  var capacityHouse = adForm.querySelector('#capacity');

  var selectedRoomsHouse = roomsHouse.options[roomsHouse.options.selectedIndex];

  for (var i = 0; i < capacityHouse.options.length; i++) {
    var optionCapacityHouse = capacityHouse.options[i];

    // Выбираем максимальное количество людей под комнаты
    if (selectedRoomsHouse.value === optionCapacityHouse.value) {
      optionCapacityHouse.setAttribute('selected', 'selected');
    } else if (selectedRoomsHouse.value === '100' && optionCapacityHouse.value === '0') {
      optionCapacityHouse.setAttribute('selected', 'selected');
    } else {
      optionCapacityHouse.removeAttribute('selected');
    }

    // Скрываем не нужные элементы
    if (selectedRoomsHouse.value < optionCapacityHouse.value) {
      optionCapacityHouse.classList.add('hidden');
    } else if (selectedRoomsHouse.value !== '100' && optionCapacityHouse.value === '0') {
      optionCapacityHouse.classList.add('hidden');
    } else if (selectedRoomsHouse.value === '100' && optionCapacityHouse.value !== '0') {
      optionCapacityHouse.classList.add('hidden');
    } else {
      optionCapacityHouse.classList.remove('hidden');
    }
  }
};

var setTimeInOut = function () {
  var timeIn = adForm.querySelector('#timein');
  var timeOut = adForm.querySelector('#timeout');

  var onClickTimein = function () {
    timeOut.value = timeIn.value;
  };

  var onClickTimeout = function () {
    timeIn.value = timeOut.value;
  };

  timeIn.addEventListener('click', onClickTimein);
  timeOut.addEventListener('click', onClickTimeout);
};


// Настройки по умолчанию
var defaultSettingForm = function () {
  // По умолчанию страница не активна
  checkStatePage(false);

  // Координаты главной метки по умолчанию
  setLocatePinMain(false);

  // Тип жилья и цена
  setTypeHousePrice();

  // Количество комнат и мест
  setRoomsCapacity();

  // Время приезда и отъезда
  setTimeInOut();
};


// *****************************
// Начало программы
// *****************************

// Карта с метками
var map = document.querySelector('.map');
var mapList = map.querySelector('.map__pins');
var mapFilterContainer = map.querySelector('.map__filters-container');
var mapPinMain = map.querySelector('.map__pin--main');

// Фильтрация объявления
var mapFilter = map.querySelector('.map__filters');
var mapFilterSelects = mapFilter.querySelectorAll('select');
var mapFilterFieldsets = mapFilter.querySelectorAll('fieldset');

// Форма добавления нового объявления
var adForm = document.querySelector('.ad-form');
var adFormFieldsets = adForm.querySelectorAll('fieldset');

// Поля формы
var typeHouse = adForm.querySelector('#type');
var priceHouse = adForm.querySelector('#price');


// Клавиши
var ENTER_KEY = 13;
var SPACE_KEY = 32;
var ESC_KEY = 27;

// Генерируем массив объявлений
var offers = generateOffer(8);

// Создаем метки объявлений
var pins = createPin(offers);

// Задаем параметры страницы по умолчанию
defaultSettingForm();

// При активации главной метки
mapPinMain.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  // Активируем страницу
  checkStatePage(true);

  // Меняем координаты главной метки
  setLocatePinMain(true);

  // Добавляем метки объявлений
  addPin(pins);
});

// Если главная метки была активирована с помощью клавиатуры
mapPinMain.addEventListener('keydown', function (evt) {
  evt.preventDefault();

  if (evt.keyCode === ENTER_KEY || evt.keyCode === SPACE_KEY) {
    // Активируем страницу
    checkStatePage(true);

    // Меняем координаты главной метки
    setLocatePinMain(true);

    // Добавляем метки объявлений
    addPin(pins);
  }
});


// Валидация формы
var onInvalidForm = function (evt) {
  var target = evt.target;
  var message = '';

  // Валидация заголовка объявления
  var titleValidation = function () {
    if (target.validity.valueMissing) {
      message = 'Укажите заголовок объявления';
      target.setCustomValidity(message);
    } else if (target.validity.tooShort) {
      message = 'Заголовок объявления не должен быть меньше 30 символов';
      target.setCustomValidity(message);
    } else if (target.validity.tooLong) {
      message = 'Заголовок объявления не должен превышать 100 символов';
      target.setCustomValidity(message);
    } else if (target.validity.typeMismatch) {
      message = 'Введено не верное значение';
      target.setCustomValidity(message);
    } else {
      target.setCustomValidity('');
    }
  };

  // Валидация типа и цены жилья
  var housingTypePriceValidation = function () {
    if (target.validity.valueMissing) {
      message = 'Укажите цену за ночь';
      target.setCustomValidity(message);
    } else if (target.validity.rangeUnderflow) {
      message = 'Цена за ночь не должна быть меньше ' + priceHouse.min + ' руб.';
      target.setCustomValidity(message);
    } else if (target.validity.rangeOverflow) {
      message = 'Цена за ночь не должна быть больше 1 000 000 руб.';
      target.setCustomValidity(message);
    } else if (target.validity.typeMismatch) {
      message = 'Введено не верное значение';
      target.setCustomValidity(message);
    } else {
      target.setCustomValidity('');
    }
  };


  // Валидируем поле с которым было взаимодействие
  switch (target.name) {
    // Поле заголовок объявления
    case 'title':
      titleValidation();
      break;
    // Поля тип и цена жилья
    case 'type':
    case 'price':
      housingTypePriceValidation();
      break;
  }

  var errorBlock = document.querySelector('#' + target.id + ' + .error-validate');

  // Если есть ошибки валидации показываем их
  if (!target.validity.valid) {
    if (!errorBlock) {
      var templateError = document.createDocumentFragment();
      errorBlock = document.createElement('div');

      errorBlock.classList.add('error-validate');
      templateError.appendChild(errorBlock);
      target.after(templateError);
    }

    errorBlock.textContent = message;

    target.style.border = '1px solid red';
  } else {
    target.setCustomValidity('');
    errorBlock.textContent = '';

    target.style.border = 'none';
  }
};


// Корректное изменение связанных полей
var onInputForm = function (evt) {
  var target = evt.target;

  // Валидируем поле с которым было взаимодействие
  switch (target.name) {
    // Поля тип и цена жилья
    case 'type':
    case 'price':
      setTypeHousePrice();
      break;
    // Поле количество комнат
    case 'rooms':
      setRoomsCapacity();
      break;
    // Поля заселения и выселения
    case 'timein':
    case 'timeout':
      setTimeInOut();
      break;
  }
};


adForm.addEventListener('invalid', onInvalidForm, true);
adForm.addEventListener('input', onInputForm, true);
