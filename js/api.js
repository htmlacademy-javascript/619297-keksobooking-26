import { showAlert } from './util.js';
import { hideFilter } from './action-filter.js';

const getData = (onSuccess) => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Не удалось загрузить данные, попробуйте еще раз');
      }
      return response;
    })
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    }).catch(() => {
      showAlert('Не удалось загрузить данные, попробуйте еще раз');
      hideFilter();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
