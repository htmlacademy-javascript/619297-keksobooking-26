import {makeOffers} from './data.js';
import './render-form.js';
import {getCardElement} from './render-form.js';
import {hideForm} from './action-form.js';
import {showForm} from './action-form.js';
import {hideFilter} from './action-filter.js';
import {showFilter} from './action-filter.js';
import './form.js';

const offers = makeOffers();

const map = document.querySelector('.map__canvas');
map.append(getCardElement(offers[0]));

hideForm();
showForm();
hideFilter();
showFilter();

