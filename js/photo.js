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
  const photoPreview = document.createElement('img');
  photoPreview.style.width = '80px';
  photoPreview.style.height = '80px';
  photoPreviewContainer.append(photoPreview);

  const photo = photoChooser.files[0];
  const photoName = photo.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => photoName.endsWith(it));

  if (matches) {
    photoPreview.src = URL.createObjectURL(photo);
  }

});
