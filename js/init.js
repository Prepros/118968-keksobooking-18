'use strict';

(function () {
  // Форма добавления нового объявления
  var form = window.dom.form.adForm;
  var submitForm = window.dom.form.submit;
  var resetForm = window.dom.form.reset;


  // Инициализация проекта
  var init = function () {
    // Деактивируем страницу
    window.page.deactive();

    // Валидация формы
    submitForm.addEventListener('click', window.form.onInvalidForm);

    // Отправка формы
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();

      var data = new FormData(form);

      // Отправка формы через ajax
      window.backend.save(window.config.link.save, data, window.util.onSuccessBlock, window.util.onErrorBlock);
    });

    // Событие изменения значений полей формы
    form.addEventListener('input', window.form.onChangeInput, true);

    // Сброс формы
    resetForm.addEventListener('click', window.form.onResetForm);
  };


  // Запускаем проект
  document.addEventListener('DOMContentLoaded', function () {
    init();
  });
})();
