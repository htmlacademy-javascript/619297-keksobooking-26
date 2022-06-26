const cardTemplate = document.querySelector('#card').content;
const cardOffer = cardTemplate.querySelector('.popup');
const map = document.querySelector('.map__canvas');

const cardOfferCopy = cardOffer.cloneNode(true);
map.append(cardOfferCopy);
console.log(cardOfferCopy);
