
const sliderPriceElement = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');
const typeSelect = document.querySelectorAll('#type');
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
  const start = Math.max(parseFloat(minPriceRoom[this.value]), parseFloat(priceInput.value));
  sliderPriceElement.noUiSlider.updateOptions({
    range: {
      min: parseFloat(minPriceRoom[this.value]),
      max: 100000,
    },
    start: isNaN(start) ? parseFloat(minPriceRoom[this.value]) : start,
  });
}

typeSelect.forEach((item) => item.addEventListener('change', setValueSlider));

sliderPriceElement.noUiSlider.on('slide', (evt) => {
  priceInput.value = evt.shift();
});

priceInput.addEventListener('change', (evt) => {
  sliderPriceElement.noUiSlider.set(evt.target.value);
});

const resetSlider = () => {
  sliderPriceElement.noUiSlider.set(1000);
};

export {resetSlider};
