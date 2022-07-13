import './render-form.js';
import './slider.js';
import './form.js';
import './map.js';
import './form-message.js';
import { hideForm } from './action-form.js';
import { hideFilter } from './action-filter.js';
import { initMap } from './map.js';
import { createAdPinMarkers } from './map.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './form.js';
import { showErrorMessage, showSuccessMessage } from './form-message.js';

const SIMILAR_OFFERS = 10;

hideFilter();
hideForm();
initMap();

getData((offers) => {
  createAdPinMarkers(offers.slice(0, SIMILAR_OFFERS));
});

setUserFormSubmit(showSuccessMessage, showErrorMessage);
