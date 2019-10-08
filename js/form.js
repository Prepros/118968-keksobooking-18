'use strict';

(function () {
  var form = window.dom.form.adForm;
  var fieldsetsForm = window.dom.form.fieldsets;
  var titleForm = window.dom.form.title;
  var typeForm = window.dom.form.type;
  var priceForm = window.dom.form.price;
  var roomsForm = window.dom.form.rooms;
  var capacityForm = window.dom.form.capacity;


  // Форма активна
  var formEnabled = function () {
    if (form.classList.contains('ad-form--disabled')) {
      form.classList.remove('ad-form--disabled');
    }

    for (var i = 0; i < fieldsetsForm.length; i++) {
      fieldsetsForm[i].removeAttribute('disabled');
    }
  };


  // Форма не активна
  var formDisabled = function () {
    if (!form.classList.contains('ad-form--disabled')) {
      form.classList.add('ad-form--disabled');
    }

    for (var i = 0; i < fieldsetsForm.length; i++) {
      fieldsetsForm[i].setAttribute('disabled', true);
    }
  };


  // Устанавливаем координаты главной метки
  var setAddressPinMain = function (statePage) {
    // Главная метка
    var mapPinMain = window.dom.map.mapPinMain;

    // Координаты главной метки
    var locatePinMain = {
      x: null,
      y: null
    };

    // Если страница активна координаты от нижней стороны метки
    // Если страница не активна координаты от центра метки
    if (statePage) {
      // Высота заостренного элемента метки
      var pinMainDownHeight = parseInt(window.getComputedStyle(mapPinMain, '::after').height, 10);

      locatePinMain.x = Math.floor(mapPinMain.offsetLeft + (mapPinMain.offsetWidth / 2));
      locatePinMain.y = Math.floor(mapPinMain.offsetTop + mapPinMain.offsetHeight + pinMainDownHeight);
    } else {
      locatePinMain.x = Math.floor(mapPinMain.offsetLeft + (mapPinMain.offsetWidth / 2));
      locatePinMain.y = Math.floor(mapPinMain.offsetTop + (mapPinMain.offsetHeight / 2));
    }

    // Записываем координаты в поле адрес
    var address = window.dom.form.address;
    address.value = 'x: ' + locatePinMain.x + '; y: ' + locatePinMain.y;
  };


  // Соотношение типа жилья с ценой
  var setTypeHousePrice = function () {
    var selectedTypeHouse = typeForm.options[typeForm.options.selectedIndex];

    switch (selectedTypeHouse.value) {
      case 'bungalo':
        priceForm.placeholder = 0;
        priceForm.setAttribute('min', 0);
        break;
      case 'flat':
        priceForm.placeholder = 1000;
        priceForm.setAttribute('min', 1000);
        break;
      case 'house':
        priceForm.placeholder = 5000;
        priceForm.setAttribute('min', 5000);
        break;
      case 'palace':
        priceForm.placeholder = 10000;
        priceForm.setAttribute('min', 10000);
        break;
    }
  };


  // Соотношение количества комнат с количеством мест
  var setRoomsCapacity = function () {
    var selectedRoomsHouse = roomsForm.options[roomsForm.options.selectedIndex];

    for (var i = 0; i < capacityForm.options.length; i++) {
      var optionCapacityHouse = capacityForm.options[i];

      // Выбираем максимальное количество людей под комнаты
      if (selectedRoomsHouse.value === optionCapacityHouse.value) {
        optionCapacityHouse.setAttribute('selected', 'selected');
      } else if (selectedRoomsHouse.value === '100' && optionCapacityHouse.value === '0') {
        optionCapacityHouse.setAttribute('selected', 'selected');
      } else {
        optionCapacityHouse.removeAttribute('selected');
      }

      // Скрываем не нужные элементы
      if (selectedRoomsHouse.value < optionCapacityHouse.value) {
        optionCapacityHouse.classList.add('hidden');
      } else if (selectedRoomsHouse.value !== '100' && optionCapacityHouse.value === '0') {
        optionCapacityHouse.classList.add('hidden');
      } else if (selectedRoomsHouse.value === '100' && optionCapacityHouse.value !== '0') {
        optionCapacityHouse.classList.add('hidden');
      } else {
        optionCapacityHouse.classList.remove('hidden');
      }
    }
  };


  // Синхронизация времени заезда и времени выезда
  var setTimeInOut = function () {
    var timeIn = form.querySelector('#timein');
    var timeOut = form.querySelector('#timeout');

    var onClickTimein = function () {
      timeOut.value = timeIn.value;
    };

    var onClickTimeout = function () {
      timeIn.value = timeOut.value;
    };

    timeIn.addEventListener('click', onClickTimein);
    timeOut.addEventListener('click', onClickTimeout);
  };


  // Установка значений полей формы по умолчанию
  var setFormDefault = function () {
    // Устанавливаем координаты главной метки по умолчанию
    setAddressPinMain();

    // Устанавливаем соотношение типа жилья с ценой
    setTypeHousePrice();

    // Устанавливаем соотношение количества комнат с количеством мест
    setRoomsCapacity();

    // Синхронизируем временя заезда и временя выезда
    setTimeInOut();

    // Деактивируем форму
    formDisabled();
  };


  // Добавить сообщение об ошибки
  var addErrorBlock = function (element, errorMessage) {
    var errorBlock = document.querySelector('#' + element.id + '+ .error-validate');

    if (!errorBlock) {
      var templateError = document.createDocumentFragment();
      errorBlock = document.createElement('div');

      errorBlock.classList.add('error-validate');
      templateError.appendChild(errorBlock);
      element.after(templateError);
    }

    errorBlock.textContent = errorMessage;

    element.style.border = '1px solid red';
  };


  // Убрать сообщение об ошибки
  var removeErrorBlock = function (element) {
    var errorBlock = document.querySelector('#' + element.id + '+ .error-validate');

    if (errorBlock) {
      errorBlock.remove();
    }
  };


  // Валидация заголовка объявления
  var titleValidation = function () {
    // Данные с формы
    var formData = new FormData(form);
    var titleData = formData.get('title');

    var message = '';

    if (!titleData) {
      message = 'Укажите заголовок объявления';
    } else if (titleData.length < 30) {
      message = 'Заголовок объявления не должен быть меньше 30 символов';
    } else if (titleData.length > 100) {
      message = 'Заголовок объявления не должен превышать 100 символов';
    }

    if (message) {
      titleForm.setCustomValidity(message);
      removeErrorBlock(titleForm);
      addErrorBlock(titleForm, message);

      return false;
    } else {
      titleForm.setCustomValidity('');
      removeErrorBlock(titleForm);
    }

    return true;
  };


  // Валидация типа и цены жилья
  var housingTypePriceValidation = function () {
    // Данные с формы
    var formData = new FormData(form);
    var priceData = formData.get('price');

    var message = '';

    var priceDataNum = parseInt(priceData, 10);
    var priceMinNum = parseInt(priceForm.min, 10);
    var priceMaxNum = parseInt(priceForm.max, 10);

    if (!priceData) {
      message = 'Укажите цену за ночь';
    } else if (priceDataNum < priceMinNum) {
      message = 'Цена за ночь не должна быть меньше ' + priceMinNum + ' руб.';
    } else if (priceDataNum > priceMaxNum) {
      message = 'Цена за ночь не должна быть больше ' + priceMaxNum + ' руб.';
    }

    if (message) {
      priceForm.setCustomValidity(message);
      addErrorBlock(priceForm, message);

      return false;
    } else {
      priceForm.setCustomValidity('');
      removeErrorBlock(priceForm);
    }

    return true;
  };


  // Валидация формы
  var onInvalidForm = function () {
    titleValidation();
    housingTypePriceValidation();

    form.removeEventListener('click', window.form.onInvalidForm);
    form.addEventListener('input', function () {
      titleValidation();
      housingTypePriceValidation();
    }, true);
  };


  // Корректное изменение связанных полей
  var onInputForm = function (evt) {
    var target = evt.target;

    // Валидируем поле с которым было взаимодействие
    switch (target.name) {
      // Поля тип и цена жилья
      case 'type':
      case 'price':
        setTypeHousePrice();
        break;
        // Поле количество комнат
      case 'rooms':
        setRoomsCapacity();
        break;
        // Поля заселения и выселения
      case 'timein':
      case 'timeout':
        setTimeInOut();
        break;
    }
  };


  window.form = {
    formEnabled: formEnabled,
    formDisabled: formDisabled,

    setAddressPinMain: setAddressPinMain,
    setFormDefault: setFormDefault,

    onInvalidForm: onInvalidForm,
    onInputForm: onInputForm
  };
})();
