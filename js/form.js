import { sendData } from './api.js';
import { resetFilters } from './filter.js';
import { showErrorMessage } from './form-message.js';
import { resetMap } from './map.js';
import { resetAvatar, resetPhoto } from './photo.js';
import { resetSlider } from './slider.js';
import { START_POINT } from './map.js';

const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text'
},);

const adRoomsSelect = adForm.querySelector('#room_number');
const adCapacitySelect = adForm.querySelector('#capacity');
const roomsCapacityOption = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0']
};

const resetButton = document.querySelector('.ad-form__reset');
const addressInput = adForm.querySelector('#address');
const priceRoomInput = adForm.querySelector('#price');
const typeRoomSelect = adForm.querySelector('#type');
const typesRoomSelect = adForm.querySelectorAll('#type');
const minPriceRoom = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000'
};

const timeInSelect = adForm.querySelector('#timein');
const timeOutSelect = adForm.querySelector('#timeout');
const submitButton = adForm.querySelector('.ad-form__submit');
const timeFieldSet = adForm.querySelector('.ad-form__element--time');

const validateRoomsCapacity = () => roomsCapacityOption[adRoomsSelect.value].includes(adCapacitySelect.value);

const getRoomsCountErrorMessage = () => {
  switch (adRoomsSelect.value) {
    case '1':
      return '1 комната для 1 гостя' ;
    case '2':
      return '2 комнаты для 2 гостей или 1 гостя';
    case '3':
      return '3 комнаты для 3 гостей, 2 гостей или 1 гостя';
    case '100':
    default:
      return 'Не для гостей';
  }
};

adCapacitySelect.addEventListener('change', () => {
  pristine.validate(adRoomsSelect);
});

pristine.addValidator(adRoomsSelect, validateRoomsCapacity, getRoomsCountErrorMessage);

const getMatchingPrice = (value) => value.length && (parseInt(value, 10) >= minPriceRoom[typeRoomSelect.value]);

const getPriceRoomErrorMessage = () => `Минимальная цена ${minPriceRoom[typeRoomSelect.value]}`;

function onTypeRoomSelectChange () {
  priceRoomInput.placeholder = minPriceRoom[this.value];
  pristine.validate(priceRoomInput);
}

typesRoomSelect.forEach((item) => item.addEventListener('change', onTypeRoomSelectChange));

pristine.addValidator(priceRoomInput, getMatchingPrice, getPriceRoomErrorMessage);

timeFieldSet.addEventListener('change', (evt) => {
  timeOutSelect.value = evt.target.value;
  timeInSelect.value = evt.target.value;
});

const resetForm = () => {
  setTimeout(() => {
    addressInput.value = `${START_POINT.lat}, ${START_POINT.lng}`;
    priceRoomInput.value = 1000;
  }, 0);
};

resetButton.addEventListener('click', ()=> {
  resetMap();
  resetForm();
  resetSlider();
  resetFilters();
  resetAvatar();
  resetPhoto();
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess, onFailForm) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          resetMap();
          adForm.reset();
          resetSlider();
          resetForm();
          resetFilters();
          resetAvatar();
          resetPhoto();
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    } else {
      onFailForm();
    }
  });
};

export {setUserFormSubmit};
