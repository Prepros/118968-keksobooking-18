'use strict';

(function () {
  // Размер карты
  var Map = {
    WIDTH_MIN: 0,
    WIDTH_MAX: window.dom.map.mapPins.offsetWidth,
    HEIGHT_MIN: 130,
    HEIGHT_MAX: 630
  };


  // Размеры пина объявления
  var Pin = {
    WIDTH: 50,
    HEIGHT: 70
  };


  // Ресценки
  var Price = {
    MIN: 0,
    MAX: 1000000
  };


  // Типы зданий и цены
  var TypePrice = {
    bungalo: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
  };


  // Комнаты и гости
  var RoomCapacity = {
    '1': ['1'],
    '2': ['1', '2'],
    '3': ['1', '2', '3'],
    '100': ['0']
  };


  // Время заселения, выселения
  var Time = [
    '12:00',
    '13:00',
    '14:00'
  ];


  var Feature = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ];


  // Ссылка получения данных с сервера
  var Link = {
    LOAD: 'https://js.dump.academy/keksobooking/data',
    SAVE: 'https://js.dump.academy/keksobooking'
  };


  window.data = {
    sizeMap: Map,
    sizePin: Pin,
    sizePrice: Price,
    link: Link,
    typePrice: TypePrice,
    time: Time,
    roomCapacity: RoomCapacity,
    feature: Feature
  };
})();
