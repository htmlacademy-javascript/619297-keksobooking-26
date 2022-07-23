import {isEscapeKey} from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageTemplate.cloneNode(true);
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);
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
