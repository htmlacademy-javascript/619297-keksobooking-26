import './data.js';
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const getCardElement = (card) => {
  const cardOfferCopy = cardTemplate.cloneNode(true);

  const setContent = (selector, content) => {
    const element = cardOfferCopy.querySelector(selector);
    if (content) {
      element.textContent = content;
      element.src = content;
    } else {
      element.remove();
    }
  };

  setContent('.popup__title',card.offer.title);
  setContent('.popup__text--address', card.offer.address ? `${card.offer.address}`: false);
  setContent('.popup__text--price',card.offer.price ? `${card.offer.price} ₽/ночь`: false);
  const typesOffer = {
    flat: 'Квартира',
    house: 'Дом',
    bungalow: 'Бунгало',
    palace: 'Дворец',
    hotel: 'Отель'
  };
  setContent('.popup__type', card.offer.type ? typesOffer[card.offer.type] : false);
  setContent('.popup__text--capacity', card.offer.rooms ? `${card.offer.rooms} комнаты для ${card.offer.guests} гостей` : false);
  setContent('.popup__text--time', card.offer.checkin ? `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}` : false);
  const featuresList = cardOfferCopy.querySelectorAll('.popup__feature');
  featuresList.forEach((featureElement) => {
    let exist = false;
    card.offer.features.forEach((feature) => {
      if (featureElement.classList.contains(`popup__feature--${feature}`)) {
        exist = true;
      }
    });
    if (!exist) {
      featureElement.remove();
    }
  });
  setContent('.popup__description', card.offer.description);
  const cardPhotos = cardOfferCopy.querySelector('.popup__photos');
  const cardPhoto = cardOfferCopy.querySelector('.popup__photo');
  const collectionPhoto = card.offer.photos;
  for (let i = 0; i < collectionPhoto.length; i++) {
    const cloneCardPhoto = cardPhoto.cloneNode(true);
    cloneCardPhoto.src = collectionPhoto[i];
    cardPhotos.append(cloneCardPhoto);
  }
  cardPhoto.remove();

  setContent('.popup__avatar', card.author.avatar);

  return cardOfferCopy;
};

export {getCardElement};
