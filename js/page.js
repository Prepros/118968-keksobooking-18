'use strict';

(function () {
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
    window.backend.load(window.data.linkData, window.pin.createPin, window.util.onErrorBlock);
  };


  window.page = {
    active: active,
    deactive: deactive
  };
})();
