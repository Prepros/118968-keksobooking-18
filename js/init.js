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

      var callback = {
        success: window.notification.success,
        error: window.notification.error,
        successText: 'Объявление успешно добавилось'
      };

      // Отправка формы через ajax
      window.backend.request('POST', window.assets.link.save, callback, data);

      // Деактивируем страницу
      window.page.deactive();
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
