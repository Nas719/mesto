const popup = document.querySelector('.popup');
const  popupCloseButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');

const formButton = document.querySelector('.popup__save-button');
const form = document.querySelector('.popup__form');

function openPopup () {
   popup.classList.add('popup_isOpen')
}

function closePopup() {
   popup.classList.remove('popup_isOpen')
}

editButton.addEventListener('click', openPopup)

popupCloseButton.addEventListener('click', closePopup)

function popupClickHandler(event) {
   console.log(event.target)

   if (event.target.classList.contains('popup')) {
     closePopup()
   }
}

popup.addEventListener('click', popupClickHandler)

function formSubmit(event) {
   event.preventDefault()
   closePopup();
}

form.addEventListener('submit', formSubmit)
