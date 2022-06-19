/* открытие и закрытие форм */
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupedit = document.querySelector('.popup-edit-profile');
const popupimg = document.querySelector('.popup-add-image');
const closeButtonEd = document.querySelector('.popup__close-button_edit');
const closeButtonImg = document.querySelector('.popup__close-button_img');

function openPopup () {
    popupedit.classList.add('popup_open');
}

editButton.addEventListener('click', function() {
    openPopup ();
})

function closePopup () {    
  popupedit.classList.remove('popup_open');
}

closeButtonEd.addEventListener('click', function() {
    closePopup ();
})


function openPopupImg () {
  popupimg.classList.add('popup_open');
}

addButton.addEventListener('click', function() {
  openPopupImg ();
})

function closePopupImg () {    
  popupimg.classList.remove('popup_open');
}

closeButtonImg.addEventListener('click', function() {
    closePopupImg ();
})

/* редактирование профиля */
const saveButton = document.querySelector('.popup__save-button');
const nameInput = document.querySelector('.popup__form_name');
const jobInput = document.querySelector('.popup__form_job');
const UserName = document.querySelector('.profile__title');
const UserJob = document.querySelector('.profile__subtitle');

function editForm () {
    UserName.textContent = nameInput.value;
    UserJob.textContent = jobInput.value;
    closePopup ();
}

saveButton.addEventListener('click', editForm);

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


function createCard (CARD) {
  const newCard = element.cloneNode(true);
  const Imgname = newCard.querySelector('.element__title');
  const Imgsrc = newCard.querySelector('.element__photo');
  Imgname.textContent = CARD.name;
  Imgsrc.src = CARD.link;
  Imgsrc.alt = CARD.name;

  const deleteButton = newCard.querySelector('.element__delete-icon');
  deleteButton.addEventListener('click', function () {
    newCard.remove();
  });

  const likeIcon = newCard.querySelector('.element__icon');
  likeIcon.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__icon_active');
  });

  Imgsrc.addEventListener('click', () => viewElement(CARD));

  return newCard;
}

initialCards.forEach(function (item)  {
    const RenCard = createCard (item);
    elements.append(RenCard);
});


/* добавление карточки */

const saveimgButton = document.querySelector('.popup__save-button_img');
const ImgnameInput = document.querySelector('.popup__form_imgname');
const ImgsrcInput = document.querySelector('.popup__form_imgsrc');

function MakeCard (evt) {
  evt.preventDefault();
  const SrcCard = {
    link: ImgsrcInput.value,
    name: ImgnameInput.value
  }
  const MyCard = createCard(SrcCard);
  elements.prepend(MyCard);
  closePopupImg();
}

saveimgButton.addEventListener('click', MakeCard);

/* открытие и закрытие картинки */

const openPic = document.querySelector('.popup-view-image');
const popupPic = openPic.querySelector('.popup__picture');
const popupSub = openPic.querySelector('.popup__subtitle');

function viewElement(Element) {
  popupSub.textContent = Element.name;
  popupPic.src = Element.link;
  popupPic.alt = Element.name; 
  openviewElement ();
}


const closeButtonPic = document.querySelector('.popup__close-button_pic');

function openviewElement () {
  openPic.classList.add('popup_open');
}

function closePicView () {    
  openPic.classList.remove('popup_open');
}

closeButtonPic.addEventListener('click', function() {
  closePicView();
})