const AVATAR_PHOTOS = [
  'img/avatars/user{{01}}.png',
  'img/avatars/user{{02}}.png',
  'img/avatars/user{{03}}.png',
  'img/avatars/user{{04}}.png',
  'img/avatars/user{{05}}.png',
  'img/avatars/user{{06}}.png',
  'img/avatars/user{{07}}.png',
  'img/avatars/user{{08}}.png',
  'img/avatars/user{{09}}.png',
  'img/avatars/user{{10}}.png'
];

const offerTitle = 'Лучшие номера для наших гостей';

const adresess = '';

const PRICE_ROOM = [1000, 2000, 3500, 5000, 7500];

const TYPE_OF_ROOMS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const ROOMS_COUNT = [1, 2, 3, 4, 5];

const GUESTS_COUNT = [1, 2, 3, 4, 5, 6];

const CHEK_IN_COUNTER = ['12:00', '13:00', '14:00'];

const CHECK_OUT_COUNTER = ['12:00', '13:00', '14:00'];

const FEATURES_ITEMS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const descriptionRoom = 'Двухместный комфортабельный номер, с кондиционером, душем и парковкой';

const ROOM_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const locationLat = {1: 35.65000, 2: 35.70000, 3: 5};

const locationLng = {1: 139.70000, 2: 139.80000, 3: 5};

const COUNT_ITEMS_OF_OFFER = 10;

/* Старые функции убрал, взял новые у кекса, хотя не уверен в правильности, те немного поправил после твоих заметок
и они как то локаничней смотрелись!*/

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
getRandomPositiveInteger(1, 8);

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};
getRandomPositiveFloat(1.3, 4.9, 3);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const makeRandomSelection = (count) => {
  const newFeatures = [];
  if (count >= FEATURES_ITEMS.length) {
    return FEATURES_ITEMS;
  }
  for (let i = 0; i < count; i++) {
    let newElement = FEATURES_ITEMS[Math.floor(Math.random() * FEATURES_ITEMS.length)];
    while (newFeatures.includes(newElement)) {
      newElement = FEATURES_ITEMS[Math.floor(Math.random() * FEATURES_ITEMS.length)];
    }
    newFeatures.push(newElement);
  }
  return newFeatures;
};


const makeTitles = () => ({
  author: {
    avatar: '',//Тут не понимаю как можно сделать
  },
  offer: {
    title: offerTitle,
    adress: ' ',// здесь тоже провал
    price: getRandomArrayElement(PRICE_ROOM),
    type: getRandomArrayElement(TYPE_OF_ROOMS),
    rooms: getRandomArrayElement(ROOMS_COUNT),
    guests: getRandomArrayElement(GUESTS_COUNT),
    checkin: getRandomArrayElement(CHEK_IN_COUNTER),
    checkout: getRandomArrayElement(CHECK_OUT_COUNTER),
    features: makeRandomSelection(3), // здесь я тоже не уверен, нашел функцию в интернете!
    description: descriptionRoom,
    photos: getRandomArrayElement(ROOM_PHOTOS),
  },
  location: {
    lat: getRandomPositiveFloat(locationLat[1], locationLat[2], locationLat[3]),
    lng: getRandomPositiveFloat(locationLng[1], locationLng[2], locationLng[3]),
  },
});

const countOffers = Array.from({length: COUNT_ITEMS_OF_OFFER}, makeTitles);

makeTitles();

