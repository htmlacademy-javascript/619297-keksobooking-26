const getHideForm = () => {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  const inputForm = document.querySelectorAll('.ad-form__element');
  for (let i = 0; i < inputForm.length; i++) {
    inputForm[i].disabled = true;
  }
  document.querySelector('.ad-form-header').disabled = true;

  const mapForm = document.querySelector('.map__filters');
  mapForm.classList.add('map__filters--disabled');
  const mapSelects = mapForm.querySelectorAll('select');
  for (let j = 0; j < mapSelects.length; j++) {
    mapSelects[j].disabled = true;
  }
  document.querySelector('.map__features').disabled =true;
};

const getShowForm = () => {
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  const inputForm = document.querySelectorAll('.ad-form__element');
  for (let i = 0; i < inputForm.length; i++) {
    inputForm[i].disabled = false;
  }
  document.querySelector('.ad-form-header').disabled = false;

  const mapForm = document.querySelector('.map__filters');
  mapForm.classList.remove('map__filters--disabled');
  const mapSelects = mapForm.querySelectorAll('select');
  for (let j = 0; j < mapSelects.length; j++) {
    mapSelects[j].disabled = false;
  }
  document.querySelector('.map__features').disabled =false;
};


export {getHideForm, getShowForm};
