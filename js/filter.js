import { debounce } from './util.js';

const filterForm = document.querySelector('.map__filters');
const housingTypeSelect = filterForm.querySelector('#housing-type');
const housingPriceSelect = filterForm.querySelector('#housing-price');
const housingRoomsSelect = filterForm.querySelector('#housing-rooms');
const housingGuestsSelect = filterForm.querySelector('#housing-guests');
const housingFeaturesCheckbox = filterForm.querySelectorAll('.map__checkbox');
const SIMILAR_OFFERS = 10;
const Price = {
  MIDDLE: 10000,
  HIGH: 50000,
};
const RERENDER_DELAY = 500;

const applyHousingType = (offer) => {
  if (housingTypeSelect.value === 'any') {
    return true;
  }
  return housingTypeSelect.value === offer.offer.type;
};

const applyHousingPrice = (offer) => {
  if (housingPriceSelect.value === 'any') {
    return true;
  }
  if (housingPriceSelect.value === 'middle') {
    return offer.offer.price < Price.HIGH && offer.offer.price >= Price.MIDDLE;
  }
  if (housingPriceSelect.value === 'low') {
    return offer.offer.price < Price.MIDDLE;
  }
  if (housingPriceSelect.value === 'high') {
    return offer.offer.price > Price.HIGH;
  }
};

const applyHousingRooms = (offer) => {
  if (housingRoomsSelect.value === 'any') {
    return true;
  }
  return housingRoomsSelect.value === String(offer.offer.rooms);
};

const applyHousingGuests = (offer) => {
  if (housingGuestsSelect.value === 'any') {
    return true;
  }
  return housingGuestsSelect.value === String(offer.offer.guests);
};

const applyHousingFeatures = (offer) => {
  const checkedFeatures = Array.from(housingFeaturesCheckbox)
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
