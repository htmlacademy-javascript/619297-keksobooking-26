import {makeOffers} from './data.js';
import './form.js';
import { getCardElement } from './form.js';

const offers = makeOffers();

const map = document.querySelector('.map__canvas');
map.append(getCardElement(offers[0]));
