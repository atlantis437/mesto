/* открытие и закрытие попапов */
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup-edit-profile');
const popupImg = document.querySelector('.popup-add-image');
const popupList = document.querySelectorAll('.popup');

function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keyup', closePopupEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keyup', closePopupEsc);
}

buttonEdit.addEventListener('click', function() {
  openPopup (popupEdit);
})

buttonAdd.addEventListener('click', function() {
  openPopup (popupImg);
})

// закрытие по клавише ESC

const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {        
      const openedPopup = document.querySelector('.popup_open');
      closePopup(openedPopup);
  }
}

// закрытие по оверлею и крестику

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
          closePopup(popup);
      }
  });
});

/* редактирование профиля */
const profileForm = document.querySelector('.popup__container_prf');
const nameInput = document.querySelector('.popup__form_name');
const jobInput = document.querySelector('.popup__form_job');
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup (popupEdit);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);


/* рендер массива, и обработчики на лайки, удаление и просмотр*/

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;
const element = cardTemplate.querySelector('.element');


function createCard (card) {
  const newCard = element.cloneNode(true);
  const imgName = newCard.querySelector('.element__title');
  const imgSrc = newCard.querySelector('.element__photo');
  imgName.textContent = card.name;
  imgSrc.src = card.link;
  imgSrc.alt = card.name;

  const buttonDel = newCard.querySelector('.element__delete-icon');
  buttonDel.addEventListener('click', function () {
    newCard.remove();
  });

  const likeIcon = newCard.querySelector('.element__icon');
  likeIcon.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__icon_active');
  });

  imgSrc.addEventListener('click', () => viewElement(card));

  return newCard;
}

initialCards.forEach(function (item)  {
    const renCard = createCard (item);
    elements.append(renCard);
});


/* добавление карточки */

const cardForm = document.querySelector('.popup__container_img');
const imgNameInput = document.querySelector('.popup__form_imgname');
const imgSrcInput = document.querySelector('.popup__form_imgsrc');
const buttonSubmit = document.querySelector('.popup__save-button_img');

function makeCard (evt) {
  evt.preventDefault();
  buttonSubmit.setAttribute('disabled', '');
  buttonSubmit.classList.add('popup__save-button_disabled');
  const srcCard = {
    link: imgSrcInput.value,
    name: imgNameInput.value
  }
  const myCard = createCard(srcCard);
  elements.prepend(myCard);
  evt.target.reset();
  closePopup (popupImg);
}

cardForm.addEventListener('submit', makeCard);


/* просмотр картинки */

const picOpen = document.querySelector('.popup-view-image');
const popupPic = picOpen.querySelector('.popup__picture');
const popupSub = picOpen.querySelector('.popup__subtitle');

function viewElement(Element) {
  popupSub.textContent = Element.name;
  popupPic.src = Element.link;
  popupPic.alt = Element.name; 
  openPopup (picOpen);
}
