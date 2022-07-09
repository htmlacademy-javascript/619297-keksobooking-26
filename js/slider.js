
const sliderPriceElement = document.querySelector('.ad-form__slider');
const inputPrice = document.querySelector('#price');
const selectType = document.querySelectorAll('#type');
const minPriceRoom = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000'
};


noUiSlider.create(sliderPriceElement, {
  range: {
    min: 1000,
    max: 100000,
  },
  start: 1000,
  step: 100,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

function setValueSlider () {
  sliderPriceElement.noUiSlider.updateOptions({
    range: {
      min: parseFloat(minPriceRoom[this.value]),
      max: 100000,
    },
    start: parseFloat(minPriceRoom[this.value]),
  });
}

selectType.forEach((item) => item.addEventListener('change', setValueSlider));

sliderPriceElement.noUiSlider.on('slide', (evt) => {
  inputPrice.value = evt.shift();
});

inputPrice.addEventListener('change', (evt) => {
  sliderPriceElement.noUiSlider.set(evt.target.value);
});

