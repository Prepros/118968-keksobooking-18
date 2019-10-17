'use strict';

(function () {
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


  window.filter = {
    filterEnabled: filterEnabled,
    filterDisabled: filterDisabled
  };
})();
