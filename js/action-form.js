const inputForm = document.querySelectorAll('.ad-form__element');
const adForm = document.querySelector('.ad-form');
const adFormHeader = document.querySelector('.ad-form-header')

const hideForm = () => {
  adForm.classList.add('ad-form--disabled');
  for (let i = 0; i < inputForm.length; i++) {
    inputForm[i].disabled = true;
  }
  adFormHeader.disabled = true;
};

const showForm = () => {
  adForm.classList.remove('ad-form--disabled');
  for (let i = 0; i < inputForm.length; i++) {
    inputForm[i].disabled = false;
  }
  adFormHeader.disabled = false;
};


export {hideForm, showForm};
