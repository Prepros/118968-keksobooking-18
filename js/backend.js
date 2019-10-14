'use strict';

(function () {
  var errorMessage = '';

  // Загрузка данных
  var loadData = function (url, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.timeout = 10000;
    xhr.open('GET', url);
    xhr.send();

    xhr.addEventListener('load', function () {
      errorMessage = '<br>' + xhr.status + ' ' + xhr.statusText;

      try {
        var data = JSON.parse(xhr.responseText);
      } catch (e) {
        errorMessage = 'Не удалось получить данные: <br>' + xhr.status + ' ' + xhr.statusText;
        onError(errorMessage);
        throw new Error(errorMessage + e);
      }

      switch (xhr.status) {
        case 200:
          onSuccess(data);
          break;
        case 400:
          errorMessage = 'Неправильный запрос: ' + errorMessage;
          onError(errorMessage);
          throw new Error(errorMessage);
        case 404:
          errorMessage = 'Запрашиваемый ресурс не найден: ' + errorMessage;
          onError(errorMessage);
          throw new Error(errorMessage);
        case 500:
          errorMessage = 'Ошибка на сервере: ' + errorMessage;
          onError(errorMessage);
          throw new Error(errorMessage);
        default:
          errorMessage = 'Ошибка: ' + errorMessage;
          onError(errorMessage);
          throw new Error(errorMessage);
      }
    });

    xhr.addEventListener('error', function () {
      errorMessage = 'Не удалось получить данные';
      onError(errorMessage);
      throw new Error(errorMessage);
    });

    xhr.addEventListener('timeout', function () {
      errorMessage = 'Ожидание превысило ' + (xhr.timeout / 1000) + ' секунд.';
      onError(errorMessage);
      throw new Error(errorMessage);
    });
  };


  // Отправка данных
  var saveData = function (url, data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.timeout = 10000;
    xhr.open('POST', url);
    xhr.send(data);

    xhr.addEventListener('load', function () {
      errorMessage = '<br>' + xhr.status + ' ' + xhr.statusText;

      switch (xhr.status) {
        case 200:
          onSuccess('Объяление отправлено.<br> Для продолжения нажмите ESC <br>или левую кнопку мыши.');
          break;
        case 400:
          errorMessage = 'Неправильный запрос: ' + errorMessage;
          onError(errorMessage);
          throw new Error(errorMessage);
        case 404:
          errorMessage = 'Запрашиваемый ресурс не найден: ' + errorMessage;
          onError(errorMessage);
          throw new Error(errorMessage);
        case 500:
          errorMessage = 'Ошибка на сервере: ' + errorMessage;
          onError(errorMessage);
          throw new Error(errorMessage);
        default:
          errorMessage = 'Ошибка: ' + errorMessage;
          onError(errorMessage);
          throw new Error(errorMessage);
      }
    });

    xhr.addEventListener('error', function () {
      errorMessage = 'Не удалось получить данные';
      onError(errorMessage);
      throw new Error(errorMessage);
    });

    xhr.addEventListener('timeout', function () {
      errorMessage = 'Ожидание превысило ' + (xhr.timeout / 1000) + ' секунд.';
      onError(errorMessage);
      throw new Error(errorMessage);
    });
  };

  window.backend = {
    load: loadData,
    save: saveData
  };
})();
