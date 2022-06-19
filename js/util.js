const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
getRandomPositiveInteger(1, 8);

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};
getRandomPositiveFloat(1.3, 4.9, 3);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomFeatures = (count, array) => {
  const newFeatures = [];
  if (count >= array.length) {
    return array;
  }
  for (let i = 0; i < count; i++) {
    let newElement = array[Math.floor(Math.random() * array.length)];
    while (newFeatures.includes(newElement)) {
      newElement = array[Math.floor(Math.random() * array.length)];
    }
    newFeatures.push(newElement);
  }
  return newFeatures;
};

const makeGenerator = (count) => {
  const pull = Array.from({length: count}, (_, index) => index);
  return () =>
    pull.splice(getRandomPositiveInteger(0, pull.length - 1), 1).shift();
};

const getAvatar = makeGenerator(10);

export {getRandomArrayElement};
export {getRandomFeatures};
export {getRandomPositiveFloat};
export {getRandomPositiveInteger};
export {getAvatar};
