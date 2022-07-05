const hideFilter = () => {
  const mapForm = document.querySelector('.map__filters');
  mapForm.classList.add('map__filters--disabled');
  const mapSelects = mapForm.querySelectorAll('select');
  for (let j = 0; j < mapSelects.length; j++) {
    mapSelects[j].disabled = true;
  }
  document.querySelector('.map__features').disabled =true;
};

const showFilter = () => {
  const mapForm = document.querySelector('.map__filters');
  mapForm.classList.remove('map__filters--disabled');
  const mapSelects = mapForm.querySelectorAll('select');
  for (let j = 0; j < mapSelects.length; j++) {
    mapSelects[j].disabled = false;
  }
  document.querySelector('.map__features').disabled =false;
};

export  {hideFilter, showFilter};
