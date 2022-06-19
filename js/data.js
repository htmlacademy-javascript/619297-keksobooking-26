import {getRandomArrayElement} from './util.js';
import {getRandomFeatures} from './util.js';
import {getRandomPositiveFloat} from './util.js';
import {getRandomPositiveInteger} from './util.js';
import {getAvatar} from './util.js';

const offerTitle = [
  'Лучшие номера для наших гостей',
  'Комфортабельные бунгало, для любителей экзотики',
  'Роскошные дворцы, для ценителей роскоши',
  'Уютные квартиры на любой вкус'
];


const MAX_OFFER_PRICE_ROOM = 7500;

const TYPE_OF_ROOMS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const MAX_ROOMS_COUNT = 100;

const MAX_GUESTS_COUNT = 100;

const CHEK_IN_COUNTER = ['12:00', '13:00', '14:00'];

const CHECK_OUT_COUNTER = ['12:00', '13:00', '14:00'];

const FEATURES_ITEMS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const descriptionRoom = [
  'Двухместный комфортабельный номер, с кондиционером, душем и парковкой',
  'Роскошный дворец на берегу моря, с садом, бассейном, парковкой',
  'Уютное бунгало на берегу моря, включает в себя все современные удобства, в первобытной оболочке',
  'Комфортная квартира в центре города, со всей современной инраструктурой в шаговой доступности'
];

const ROOM_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const MIN_LAT = 35.65000;

const MAX_LAT = 35.70000;

const MIN_LNG = 139.70000;

const MAX_LNG = 139.80000;

const LOCATION_DIGITS = 5;

const COUNT_ITEMS_OF_OFFER = 10;

const makeOffer = () => {
  const location = {
    lat: getRandomPositiveFloat(MIN_LAT, MAX_LAT, LOCATION_DIGITS),
    lng: getRandomPositiveFloat(MIN_LNG, MAX_LNG, LOCATION_DIGITS),
  };

  return {

    author: {
      avatar: `img/avatars/user${String(getAvatar()).padStart(2, 0)}.png`,
    },
    offer: {
      title: getRandomArrayElement(offerTitle),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(0, MAX_OFFER_PRICE_ROOM),
      type: getRandomArrayElement(TYPE_OF_ROOMS),
      rooms: getRandomPositiveInteger(0, MAX_ROOMS_COUNT),
      guests: getRandomPositiveInteger(0, MAX_GUESTS_COUNT),
      checkin: getRandomArrayElement(CHEK_IN_COUNTER),
      checkout: getRandomArrayElement(CHECK_OUT_COUNTER),
      features: getRandomFeatures(3, FEATURES_ITEMS),
      description: getRandomArrayElement(descriptionRoom),
      photos: ROOM_PHOTOS.slice(0, getRandomPositiveInteger(0, ROOM_PHOTOS.length - 1)),
    },
    location: location
  };
};

const makeOffers = () => Array.from({length: COUNT_ITEMS_OF_OFFER}, makeOffer);

makeOffers();

export {makeOffers};
