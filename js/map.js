import { showForm } from './action-form.js';
import { showFilter } from './action-filter.js';
import { getCardElement } from './render-form.js';

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const adPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68622,
    lng: 139.77074,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

const initMap = () => {
  map.on('load', () => {
    showFilter();
    showForm();
  });

  map.setView({
    lat: 35.68622,
    lng: 139.77074,
  }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  document.querySelector('#address').value = '35.68622, 139.77074';

  mainPinMarker.addTo(map);
};

const createAdPinMarkers = (cards) => {
  markerGroup.clearLayers();
  cards.forEach((card) => {
    const marker = L.marker(
      card.location,
      {
        icon: adPinIcon,
      });
    marker.addTo(markerGroup).bindPopup(getCardElement(card));
  });
};

mainPinMarker.on('moveend', (evt) => {
  const adressInput = document.querySelector('#address');
  const dot = evt.target.getLatLng();
  adressInput.value = `${dot.lat.toFixed(5)}, ${dot.lng.toFixed(5)}`;
});

const resetMap = () => {
  map.closePopup();
  const latlng = L.latLng(35.68622, 139.77074);
  mainPinMarker.setLatLng(latlng);
};

export {initMap, createAdPinMarkers, resetMap};
