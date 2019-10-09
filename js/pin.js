'use strict';

(function () {
  // Главный пин
  var mapPinMain = window.dom.map.mapPinMain;

  // Высота заостренного элемента метки
  var mapPinMainAfterHeight = parseInt(window.getComputedStyle(mapPinMain, '::after').height, 10);


  // Создание меток
  var createPin = function (offers) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < offers.length; i++) {
      var mapItem = renderPin(offers[i]);
      fragment.appendChild(mapItem);
    }

    return fragment;
  };


  // Отрисовка меток
  var renderPin = function (offer) {
    var templatePin = document.querySelector('#pin').content;
    var mapPin = templatePin.querySelector('.map__pin');

    var itemPin = mapPin.cloneNode(true);
    var img = itemPin.querySelector('img');

    // var itemPinWidth = 50;
    // var itemPinHeight = 70;

    itemPin.setAttribute('tabindex', 0);

    // offer.location.x = Math.floor(offer.location.x - (itemPinWidth / 2));
    // offer.location.y = offer.location.y - itemPinHeight;

    itemPin.setAttribute('style', 'left: ' + offer.location.x + 'px; top: ' + offer.location.y + 'px;');
    img.src = offer.author.avatar;
    img.alt = offer.offer.title;

    itemPin.addEventListener('click', function (evt) {
      evt.preventDefault();

      window.card.addCard(offer);

      itemPin.classList.add('map__pin--active');
    });

    return itemPin;
  };


  // Добавление меток
  var addPin = function (pins) {
    window.dom.map.mapPins.appendChild(pins);
  };


  // Удаление меток
  var removePin = function () {
    var pins = document.querySelectorAll('.map__pin');

    // Удаляем все пины кроме главного
    pins.forEach(function (item) {
      if (!item.classList.contains('map__pin--main')) {
        item.parentNode.removeChild(item);
      }
    });
  };


  // Диактивация меток
  var deactivatePin = function () {
    // Активный пин объявления
    var mapPinActive = window.dom.map.mapPins.querySelector('.map__pin--active');

    if (mapPinActive) {
      mapPinActive.classList.remove('map__pin--active');
    }
  };


  // Перемещение главного пина
  mapPinMain.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };


    // Перемещение метки
    var onMouseMove = function (evtMove) {
      evtMove.preventDefault();

      // Смещение координат
      var shiftCoords = {
        x: startCoords.x - evtMove.clientX,
        y: startCoords.y - evtMove.clientY
      };

      // Перезадаем стартовую позицию
      startCoords.x = evtMove.clientX;
      startCoords.y = evtMove.clientY;

      // Расстояние главной метки от начала карты
      var mapPinMainTop = mapPinMain.offsetTop - shiftCoords.y;
      var mapPinMainLeft = mapPinMain.offsetLeft - shiftCoords.x;

      // Допустимые значения для смещения главной метки по оси X
      var shiftMapPinMainX = {
        min: window.data.sizeMap.width.min - (mapPinMain.offsetWidth / 2),
        max: window.data.sizeMap.width.max - (mapPinMain.offsetWidth / 2)
      };

      // Допустимые значения для смещения главной метки по оси Y
      var shiftMapPinMainY = {
        min: window.data.sizeMap.height.min - (mapPinMain.offsetHeight / 2),
        max: window.data.sizeMap.height.max - mapPinMainAfterHeight
      };

      if (mapPinMainTop >= shiftMapPinMainY.min && mapPinMainTop <= shiftMapPinMainY.max) {
        mapPinMain.style.top = mapPinMainTop + 'px';
      }

      if (mapPinMainLeft >= shiftMapPinMainX.min && mapPinMainLeft <= shiftMapPinMainX.max) {
        mapPinMain.style.left = mapPinMainLeft + 'px';
      }

      window.form.setAddressPinMain(true);
    };


    // Отмена перемещения метки
    var onMouseUp = function (evtDown) {
      evtDown.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


  window.pin = {
    createPin: createPin,
    addPin: addPin,
    deactivatePin: deactivatePin,
    removePin: removePin,
    mapPinMainAfterHeight: mapPinMainAfterHeight
  };
})();
