'use strict';

(function () {
  // Главный пин
  var mapPinMain = window.dom.map.mapPinMain;


  // Форма добавления нового объявления
  var form = window.dom.form.adForm;
  var submitForm = window.dom.form.submit;
  var resetForm = window.dom.form.reset;


  // Инициализация проекта
  var init = function () {
    // Генерируем массив объявлений
    var offers = window.data.generateOffer(8);


    // Метки объявлений
    var pins = null;


    // Активация страницы
    var activePage = function () {
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
    var deactivePage = function () {
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

      // Создаем метки объявлений
      pins = window.pin.createPin(offers);
    };


    // 1 - Задаем настройки страницы по умолчанию
    deactivePage();


    // 2 - Меняем настройки страницы при активакции пина
    // Активируем страницу при клике мыши
    var onClickPageEnabled = function (evt) {
      evt.preventDefault();

      // Активация страницы
      activePage();
    };


    // Активируем страницу при нажатии клавиш
    var onKeydownPageEnabled = function (evt) {
      evt.preventDefault();

      // Клавиша Enter
      window.util.isEnterEvent(evt, activePage);

      // Клавиша Space
      window.util.isSpaceEvent(evt, activePage);

      mapPinMain.removeEventListener('keydown', onKeydownPageEnabled);
    };


    mapPinMain.addEventListener('mousedown', onClickPageEnabled);
    mapPinMain.addEventListener('keydown', onKeydownPageEnabled);


    // 3 - Валидация формы
    // При отправки формы
    submitForm.addEventListener('click', window.form.onInvalidForm);

    // При изменении значений полей
    form.addEventListener('input', window.form.onInputForm, true);

    // Сброс формы
    resetForm.addEventListener('click', function (evt) {
      evt.preventDefault();
      deactivePage();
    });
  };


  // Запускаем проект
  document.addEventListener('DOMContentLoaded', function () {
    init();
  });
})();
