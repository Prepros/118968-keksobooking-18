'use strict';

(function () {
  var fieldsets = window.dom.filter.fieldsets;
  var selects = window.dom.filter.selects;

  // Фильтр активен
  var filterEnabled = function () {
    for (var i = 0; i < selects.length; i++) {
      selects[i].removeAttribute('disabled');
    }

    for (i = 0; i < fieldsets.length; i++) {
      fieldsets[i].removeAttribute('disabled');
    }
  };


  // Фильтр активен
  var filterDisabled = function () {
    for (var i = 0; i < selects.length; i++) {
      selects[i].setAttribute('disabled', true);
    }

    for (i = 0; i < fieldsets.length; i++) {
      fieldsets[i].setAttribute('disabled', true);
    }
  };


  window.filter = {
    filterEnabled: filterEnabled,
    filterDisabled: filterDisabled
  };
})();
