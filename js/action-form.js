const hideForm = () => {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  const inputForm = document.querySelectorAll('.ad-form__element');
  for (let i = 0; i < inputForm.length; i++) {
    inputForm[i].disabled = true;
  }
  document.querySelector('.ad-form-header').disabled = true;
};

const showForm = () => {
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  const inputForm = document.querySelectorAll('.ad-form__element');
  for (let i = 0; i < inputForm.length; i++) {
    inputForm[i].disabled = false;
  }
  document.querySelector('.ad-form-header').disabled = false;
};


export {hideForm, showForm};
