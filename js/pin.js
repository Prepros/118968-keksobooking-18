'use strict';

(function () {
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

      window.card.addCard(offer);

      itemPin.classList.add('map__pin--active');
    });

    return itemPin;
  };


  // Добавление меток
  var addPin = function (pins) {
    window.dom.map.mapPins.appendChild(pins);
  };


  // Диактивация меток
  var deactivatePin = function () {
    // Активный пин объявления
    var mapPinActive = window.dom.map.mapPins.querySelector('.map__pin--active');

    if (mapPinActive) {
      mapPinActive.classList.remove('map__pin--active');
    }
  };


  window.pin = {
    createPin: createPin,
    addPin: addPin,
    deactivatePin: deactivatePin
  };
})();
