import {isEscapeKey} from './util.js';

const succsessMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = succsessMessageTemplate.cloneNode(true);
const errorMessageTemlate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemlate.cloneNode(true);
const closeErrorMessageButton = errorMessage.querySelector('.error__button');


const onEscapeKeyDown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
    closeErrorMessage();
  }
};

function showSuccessMessage () {
  const body = document.querySelector('body');
  body.append(successMessage);

  document.addEventListener('keydown', onEscapeKeyDown);
}

function closeSuccessMessage () {
  successMessage.remove();

  document.removeEventListener('keydown', onEscapeKeyDown);
}

function showErrorMessage () {
  const body = document.querySelector('body');
  body.append(errorMessage);

  document.addEventListener('keydown', onEscapeKeyDown);
}

function closeErrorMessage () {
  errorMessage.remove();

  document.removeEventListener('keydown', onEscapeKeyDown);
}

document.addEventListener('click', () => {
  closeSuccessMessage();
  closeErrorMessage();
});

closeErrorMessageButton.addEventListener('click', () => {
  closeErrorMessage();
});

export {showSuccessMessage, closeSuccessMessage, showErrorMessage, closeErrorMessage};
