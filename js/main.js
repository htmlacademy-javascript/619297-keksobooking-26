function getRandomIntInclusive(min, max) {
  if (min > max || min < 0 || max <= 0) {
    return ('Неверный диапазон значений');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive (0, 87);

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random ссылка на источник!

function getRandomFloating (min, max, maxDigits = 0) {
  if (min > max || min < 0 || max <= 0) {
    return ('Неверный диапазон значений');
  }
  const degree = 10 ** maxDigits;
  return ~~ ((Math.random() *(max - min) + min) * degree) / degree;
}
getRandomFloating(1, 4, 3);

// https://qna.habr.com/q/999157 ссылка на источник!
