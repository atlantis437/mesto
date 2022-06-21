/* открытие и закрытие форм */
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup-edit-profile');
const popupImg = document.querySelector('.popup-add-image');
const closeButtons = document.querySelectorAll('.popup__close-button');

function openPopup(popup) {
  popup.classList.add('popup_open');
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
}

editButton.addEventListener('click', function() {
  openPopup (popupEdit);
})

addButton.addEventListener('click', function() {
  openPopup (popupImg);
})

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});


/* редактирование профиля */
const saveButton = document.querySelector('.popup__container_prf');
const nameInput = document.querySelector('.popup__form_name');
const jobInput = document.querySelector('.popup__form_job');
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');

function editForm (evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup (popupEdit);
}

saveButton.addEventListener('submit', editForm);


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

  const deleteButton = newCard.querySelector('.element__delete-icon');
  deleteButton.addEventListener('click', function () {
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

const saveImgbutton = document.querySelector('.popup__container_img');
const imgNameInput = document.querySelector('.popup__form_imgname');
const imgSrcInput = document.querySelector('.popup__form_imgsrc');

function makeCard (evt) {
  evt.preventDefault();
  const srcCard = {
    link: imgSrcInput.value,
    name: imgNameInput.value
  }
  const myCard = createCard(srcCard);
  elements.prepend(myCard);
  evt.target.reset();
  closePopup (popupImg);
}

saveImgbutton.addEventListener('submit', makeCard);

/* просмотр картинки */

const openPic = document.querySelector('.popup-view-image');
const popupPic = openPic.querySelector('.popup__picture');
const popupSub = openPic.querySelector('.popup__subtitle');

function viewElement(Element) {
  popupSub.textContent = Element.name;
  popupPic.src = Element.link;
  popupPic.alt = Element.name; 
  openPopup (openPic);
}










