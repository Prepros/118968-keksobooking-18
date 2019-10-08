'use strict';

(function () {
  // DOM элементы карты объявлений
  var mapContainer = document.querySelector('.map');
  var mapPins = mapContainer.querySelector('.map__pins');
  var mapPinMain = mapContainer.querySelector('.map__pin--main');


  // DOM элементы фильтрации объявлений
  var mapFilterContainer = mapContainer.querySelector('.map__filters-container');
  var mapFilter = mapFilterContainer.querySelector('.map__filters');
  var mapFilterSelects = mapFilter.querySelectorAll('select');
  var mapFilterFieldsets = mapFilter.querySelectorAll('fieldset');


  // DOM элементы форма добавления нового объявления
  var adForm = document.querySelector('.ad-form');
  var adFormFieldsets = adForm.querySelectorAll('fieldset');

  var titleForm = adForm.querySelector('#title');
  var addressForm = adForm.querySelector('#address');
  var typeHouseForm = adForm.querySelector('#type');
  var priceHouse = adForm.querySelector('#price');
  var roomsHouse = adForm.querySelector('#room_number');
  var capacityHouse = adForm.querySelector('#capacity');
  var submitForm = adForm.querySelector('.ad-form__submit');


  // DOM элементы карты
  var map = {
    mapContainer: mapContainer,
    mapPins: mapPins,
    mapPinMain: mapPinMain
  };


  // DOM элементы фильтра
  var filter = {
    filterContainer: mapFilterContainer,
    selects: mapFilterSelects,
    fieldsets: mapFilterFieldsets
  };


  // DOM элементы формы
  var form = {
    adForm: adForm,
    title: titleForm,
    address: addressForm,
    type: typeHouseForm,
    price: priceHouse,
    rooms: roomsHouse,
    capacity: capacityHouse,
    submit: submitForm,

    fieldsets: adFormFieldsets
  };


  // Общий DOM
  window.dom = {
    map: map,
    filter: filter,
    form: form
  };
})();
