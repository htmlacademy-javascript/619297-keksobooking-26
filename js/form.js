const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element', // Элемент, на который будут добавляться классы
  //errorClass: '', // Класс, обозначающий невалидное поле
  //successClass: '', // Класс, обозначающий валидное поле
  errorTextParent: 'ad-form__element', // Элемент, куда будет выводиться текст с ошибкой
  //errorTextTag: '', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'ad-form__error-text' // Класс для элемента с текстом ошибки
},);

const adRooms = adForm.querySelector('#room_number');
const adCapacity = adForm.querySelector('#capacity');
const roomsCapacityOption = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0']
};

const validateRoomsCapacity = () => roomsCapacityOption[adRooms.value].includes(adCapacity.value);

const getRoomsCountErrorMessage = () => {
  switch (adRooms.value) {
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

adCapacity.addEventListener('change', () => {
  pristine.validate(adRooms);
});

pristine.addValidator(adRooms, validateRoomsCapacity, getRoomsCountErrorMessage);

const priceRoom = adForm.querySelector('#price');
const typeRoom = adForm.querySelector('#type');
const typesRoom = adForm.querySelectorAll('#type');
const minPriceRoom = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000'
};

const getMatchingPrice = (value) => value.length && (parseInt(value, 10) >= minPriceRoom[typeRoom.value]);

const getPriceRoomErrorMessage = () => `Минимальная цена ${minPriceRoom[typeRoom.value]}`;

function onTypeRoomChange () {
  priceRoom.placeholder = minPriceRoom[this.value];
  pristine.validate(priceRoom);
}

typesRoom.forEach((item) => item.addEventListener('change', onTypeRoomChange));

pristine.addValidator(priceRoom, getMatchingPrice, getPriceRoomErrorMessage);

const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

adForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
