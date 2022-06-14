
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