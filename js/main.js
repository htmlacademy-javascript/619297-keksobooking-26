import { makeOffers } from './data.js';
import './render-form.js';
import './slider.js';
import './form.js';
import './map.js';
import { hideForm } from './action-form.js';
import { hideFilter } from './action-filter.js';
import { initMap } from './map.js';
import { createAdPinMarkers } from './map.js';

const offers = makeOffers();

hideFilter();
hideForm();
initMap();
createAdPinMarkers(offers);
