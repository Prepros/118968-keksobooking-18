'use strict';

(function () {
  // Контейнер для фильтров
  var filterContainer = window.dom.filter.filterContainer;


  // Отрисовка объявлений
  var renderCard = function (offer) {
    var templateCard = document.querySelector('#card').content;
    var card = templateCard.querySelector('.map__card');

    var itemCard = card.cloneNode(true);
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

    // Удаляем дочерние элементы
    while (photos.firstChild) {
      photos.removeChild(photos.firstChild);
    }

    var photosFragment = document.createDocumentFragment();

    for (i = 0; i < offer.offer.photos.length; i++) {
      var photoItem = document.createElement('img');
      photoItem.classList.add('popup__photo');
      photoItem.src = offer.offer.photos[i];
      photoItem.width = 45;
      photoItem.height = 40;
      photoItem.alt = offer.offer.title;
      photosFragment.appendChild(photoItem);
    }

    photos.appendChild(photosFragment);

    // Аватар
    avatar.src = offer.author.avatar;

    // Закрытие через ESC
    var onEscPress = function (evt) {
      window.util.isEscEvent(evt, closePopup);
      document.removeEventListener('keydown', onEscPress);
    };

    // Закрытие карточки объявления
    var closePopup = function () {
      itemCard.remove();
      window.pin.deactivatePin();

      document.removeEventListener('keydown', onEscPress);
    };


    // Кнопка закрыть у объявления
    closeButton.addEventListener('click', function () {
      closePopup();
    });

    document.addEventListener('keydown', onEscPress);

    return itemCard;
  };


  // Добавление объявления
  var addCard = function (offer) {
    removeCard();
    window.pin.deactivatePin();

    var fragment = document.createDocumentFragment();

    var cardItem = renderCard(offer);
    fragment.appendChild(cardItem);

    filterContainer.before(fragment);
    document.querySelector('.popup__close').focus();
  };

  // Удаление объявления
  var removeCard = function () {
    // Карточка объявления
    var mapCard = window.dom.map.mapContainer.querySelector('.map__card');

    if (mapCard) {
      mapCard.remove();
    }
  };

  window.card = {
    addCard: addCard
  };
})();