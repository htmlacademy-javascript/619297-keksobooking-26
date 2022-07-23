const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoChooser = document.querySelector('.ad-form__input');
const photoPreviewContainer = document.querySelector('.ad-form__photo');

avatarChooser.addEventListener('change', () => {
  const avatar = avatarChooser.files[0];
  const avatarName = avatar.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => avatarName.endsWith(it));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(avatar);
  }
});

photoChooser.addEventListener('change', () => {
  const photo = photoChooser.files[0];
  const photoName = photo.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => photoName.endsWith(it));

  if (matches) {
    let imgElement = photoPreviewContainer.querySelector('img');
    if (!imgElement) {
      imgElement = document.createElement('img');
      imgElement.style.width = '100%';
      imgElement.style.height = '100%';
      imgElement.style.objectFit = 'contain';

      photoPreviewContainer.append(imgElement);
    }
    imgElement.src = URL.createObjectURL(photo);
  }

});

const resetAvatar = () => {
  avatarPreview.src = './img/muffin-grey.svg';
};

const resetPhoto = () => {
  const imgElement = photoPreviewContainer.querySelector('img');
  if (imgElement) {
    imgElement.remove();
  }
};

export {resetAvatar, resetPhoto};


