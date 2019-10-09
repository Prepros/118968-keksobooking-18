'use strict';

(function () {
  // Генерируем массив объявлений
  var offers = window.data.generateOffer(8);


  // Метки объявлений
  var pins = null;


  // Активация страницы
  var active = function () {
    // Активируем карту объявлений
    window.map.mapEnabled();

    // Активируем фильтр объявлений
    window.filter.filterEnabled();

    // Активируем форму
    window.form.formEnabled();

    // Меняем координаты главной метки
    window.form.setAddressPinMain(true);

    // Добавляем метки объявлений
    window.pin.addPin(pins);
  };


  // Деактивация страницы
  var deactive = function () {
    // Деактивируем карту объявлений
    window.map.mapDisabled();

    // Деактивируем фильтр объявлений
    window.filter.filterDisabled();

    // Деактивируем форму
    window.form.formDisabled();

    // Устанавливаем значения полей формы поумолчанию
    window.form.setFormDefault();

    // Удаляем метки объявлений
    window.pin.removePin();

    // Удаляем карточки объявлений
    window.card.removeCard();

    // Возврат главного пина в исходное положение
    window.pin.setPositionMapPinMainDefault();

    // Создаем метки объявлений
    pins = window.pin.createPin(offers);
  };


  window.page = {
    active: active,
    deactive: deactive
  };
})();
