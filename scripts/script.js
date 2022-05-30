


const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');

editButton.addEventListener('click', function() {
    popup.classList.add('popup_open');
})

closeButton.addEventListener('click', function() {
    popup.classList.remove('popup_open');
})