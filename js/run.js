'use strict';

(function () {
  // Форма добавления нового объявления
  var form = window.dom.form.adForm;
  var submitForm = window.dom.form.submit;


  // Генерируем массив объявлений
  var offers = window.data.generateOffer(8);


  // Создаем метки объявлений
  var pins = window.pin.createPin(offers);


  // Активация страницы
  var activePage = function () {
    // Активируем карту
    window.map.mapEnabled();

    // Активируем фильтр
    window.filter.filterEnabled();

    // Активируем форму
    window.form.formEnabled();

    // Меняем координаты главной метки
    window.form.setAddressPinMain(true);

    // Добавляем метки объявлений
    window.pin.addPin(pins);
  };


  // 1 - Задаем настройки страницы по умолчанию
  // Деактивируем карту объявлений
  window.map.mapDisabled();

  // Деактивируем фильтр объявлений
  window.filter.filterDisabled();

  // Устанавливаем значения полей формы поумолчанию
  window.form.setFormDefault();


  // 2 - Меняем настройки страницы при активакции пина
  // Активируем страницу при клике мыши
  var onClickPageEnabled = function (evt) {
    evt.preventDefault();

    // Активация страницы
    activePage();

    window.dom.map.mapPinMain.removeEventListener('mousedown', onClickPageEnabled);
  };


  // Активируем страницу при нажатии клавиш
  var onKeydownPageEnabled = function (evt) {
    evt.preventDefault();

    // Клавиша Enter
    window.util.isEnterEvent(evt, activePage);

    // Клавиша Space
    window.util.isSpaceEvent(evt, activePage);

    window.dom.map.mapPinMain.removeEventListener('keydown', onKeydownPageEnabled);
  };


  window.dom.map.mapPinMain.addEventListener('mousedown', onClickPageEnabled);
  window.dom.map.mapPinMain.addEventListener('keydown', onKeydownPageEnabled);


  // 3 - Валидация формы
  // При отправки формы
  submitForm.addEventListener('click', window.form.onInvalidForm);

  // При изменении значений полей
  form.addEventListener('change', window.form.onInputForm, true);
})();
