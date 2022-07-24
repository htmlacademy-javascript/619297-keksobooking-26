const mapForm = document.querySelector('.map__filters');
const mapSelects = mapForm.querySelectorAll('select');
const mapFeatures = document.querySelector('.map__features');

const hideFilter = () => {
  mapForm.classList.add('map__filters--disabled');
  for (let j = 0; j < mapSelects.length; j++) {
    mapSelects[j].disabled = true;
  }
  mapFeatures.disabled = true;
};

const showFilter = () => {
  mapForm.classList.remove('map__filters--disabled');
  for (let j = 0; j < mapSelects.length; j++) {
    mapSelects[j].disabled = false;
  }
  mapFeatures.disabled = false;
};

export  {hideFilter, showFilter};
