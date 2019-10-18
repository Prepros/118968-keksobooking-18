'use strict';

(function () {
  var form = window.dom.filter.form;
  var fieldsets = window.dom.filter.fieldsets;
  var selects = window.dom.filter.selects;

  // Фильтр активен
  var filterEnabled = function () {
    selects.forEach(function (value) {
      value.removeAttribute('disabled');
    });

    fieldsets.forEach(function (value) {
      value.removeAttribute('disabled');
    });
  };


  // Фильтр активен
  var filterDisabled = function () {
    selects.forEach(function (value) {
      value.setAttribute('disabled', true);
    });

    fieldsets.forEach(function (value) {
      value.setAttribute('disabled', true);
    });
  };


  // Фильтрация количества объявлений
  var filterCountData = function (data, count) {
    if (!count || count <= 0) {
      count = window.assets.countData;
    }

    if (data.length > count) {
      data = data.slice(0, count);
    }

    return data;
  };


  // Фильтрация по типу жилья
  var filterTypeHouse = function () {
    
  };


  form.addEventListener('change', function (evt) {
    // Выбранное поле
    var target = evt.target;

    // Значение выбранного поля
    var option = target.value;

    // Удаляем страные пины
    window.pin.removePin();

    // Загружаем новые пины
    window.backend.loadData(function (xhr) {
      var data = xhr.response;

      data = data.filter(function (value) {
        return value.offer.type === option;
      });

      // filterData = data.filter(function (value) {
      //   return value.offer.price === option;
      // });





      data = filterCountData(data);


      window.pin.addPin(data);
    });
  }, true);

  window.filter = {
    filterEnabled: filterEnabled,
    filterDisabled: filterDisabled,

    filterCountData: filterCountData
  };
})();
