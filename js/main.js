import './render-form.js';
import './slider.js';
import './form.js';
import './map.js';
import './form-message.js';
import './photo.js';
import { hideForm } from './action-form.js';
import { hideFilter } from './action-filter.js';
import { initMap } from './map.js';
import { createAdPinMarkers } from './map.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './form.js';
import { showErrorMessage, showSuccessMessage } from './form-message.js';
import { updateFilters } from './filter.js';

hideFilter();
hideForm();
initMap();

getData((offers) => {
  updateFilters(offers, createAdPinMarkers);
});

setUserFormSubmit(showSuccessMessage, showErrorMessage);
