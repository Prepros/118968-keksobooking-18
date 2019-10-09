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
    // 1 - Задаем настройки страницы по умолчанию
    window.page.deactive();


    // 2 - Меняем настройки страницы при активакции пина
    // Активируем страницу при клике мыши
    var onClickPageEnabled = function (evt) {
      evt.preventDefault();

      // Активация страницы
      window.page.active();
    };


    // Активируем страницу при нажатии клавиш
    var onKeydownPageEnabled = function (evt) {
      evt.preventDefault();

      // Клавиша Enter
      window.util.isEnterEvent(evt, window.page.active);

      // Клавиша Space
      window.util.isSpaceEvent(evt, window.page.active);

      mapPinMain.removeEventListener('keydown', onKeydownPageEnabled);
    };


    mapPinMain.addEventListener('mousedown', onClickPageEnabled);
    mapPinMain.addEventListener('keydown', onKeydownPageEnabled);


    // 3 - Валидация формы
    // При отправки формы
    submitForm.addEventListener('click', window.form.onInvalidForm);

    // При изменении значений полей
    form.addEventListener('input', window.form.onChangeInput, true);

    // Сброс формы
    resetForm.addEventListener('click', function (evt) {
      evt.preventDefault();
      window.page.deactive();
    });
  };


  // Запускаем проект
  document.addEventListener('DOMContentLoaded', function () {
    init();
  });
})();
