const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const makeGenerator = (count) => {
  const pull = Array.from({length: count}, (_, index) => index);
  return () =>
    pull.splice(getRandomPositiveInteger(0, pull.length - 1), 1).shift();
};

const getRandomArrayElements = (count, array) => {
  const getArrayIndex = makeGenerator(count);
  return Array.from({length: count}, () => array[getArrayIndex()]);
};

export {getRandomArrayElement, getRandomArrayElements, getRandomPositiveFloat, getRandomPositiveInteger, makeGenerator};
