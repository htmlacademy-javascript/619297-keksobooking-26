import {makeOffers} from './data.js';
import './form.js';
import {getCardElement} from './form.js';
import {getHideForm} from './action.js';
import {getShowForm} from './action.js';

const offers = makeOffers();

const map = document.querySelector('.map__canvas');
map.append(getCardElement(offers[0]));

getHideForm();
getShowForm();
