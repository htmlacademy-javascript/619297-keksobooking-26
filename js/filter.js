import { debounce } from './util.js';

const filterForm = document.querySelector('.map__filters');
const housingType = filterForm.querySelector('#housing-type');
const housingPrice = filterForm.querySelector('#housing-price');
const housingRooms = filterForm.querySelector('#housing-rooms');
const housingGuests = filterForm.querySelector('#housing-guests');
const housingFeatures = filterForm.querySelectorAll('.map__checkbox');
const SIMILAR_OFFERS = 10;
const price = {
  MIDDLE: 10000,
  HIGH: 50000,
};
const RERENDER_DELAY = 500;

const applyHousingType = (offer) => {
  const filterValue = housingType.value;
  const typeValue = offer.offer.type;
  if (filterValue === 'any') {
    return true;
  }
  return filterValue === typeValue;
};

const applyHousingPrice = (offer) => {
  if (housingPrice.value === 'any') {
    return true;
  }
  if (housingPrice.value === 'middle') {
    return offer.offer.price < price.HIGH && offer.offer.price >= price.MIDDLE;
  }
  if (housingPrice.value === 'low') {
    return offer.offer.price < price.MIDDLE;
  }
  if (housingPrice.value === 'high') {
    return offer.offer.price > price.HIGH;
  }
};

const applyHousingRooms = (offer) => {
  if (housingRooms.value === 'any') {
    return true;
  }
  return housingRooms.value === String(offer.offer.rooms);
};

const applyHousingGuests = (offer) => {
  if (housingGuests.value === 'any') {
    return true;
  }
  return housingGuests.value === String(offer.offer.guests);
};

const applyHousingFeatures = (offer) => {
  const checkedFeatures = Array.from(housingFeatures)
    .filter((housingFeature) => housingFeature.checked)
    .map((housingFeature) => housingFeature.value);
  if (!checkedFeatures.length) {
    return true;
  }
  if (offer.offer.features) {
    return checkedFeatures.every((feature) => offer.offer.features.includes(feature));
  }
  return false;
};

const applyFilters = (offers) => offers
  .filter(applyHousingType)
  .filter(applyHousingFeatures)
  .filter(applyHousingRooms)
  .filter(applyHousingPrice)
  .filter(applyHousingGuests)
  .slice(0, SIMILAR_OFFERS);

let debouncedCallback = null;

const resetFilters = () => {
  filterForm.reset();
  if (debouncedCallback) {
    debouncedCallback();
  }
};

const updateFilters = (offers, cb) => {
  debouncedCallback = debounce(() => cb(applyFilters(offers)), RERENDER_DELAY);
  filterForm.addEventListener('change', () => {
    debouncedCallback();
  });
  debouncedCallback();
};

export {updateFilters, applyFilters, resetFilters};
