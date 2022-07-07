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
    min: 0,
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
  sliderPriceElement.noUiSlider.set(minPriceRoom[this.value]);
}

selectType.forEach((item) => item.addEventListener('change', setValueSlider));


sliderPriceElement.noUiSlider.on('update', () => {
  inputPrice.value = sliderPriceElement.noUiSlider.get();
});

inputPrice.addEventListener('input', () => {
  sliderPriceElement.noUiSlider.set(inputPrice.value);
});
