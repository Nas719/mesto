const popup = document.querySelector('.popup');
const  popupCloseButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');

const formButton = document.querySelector('.popup__save-button');
const form = document.querySelector('.popup__form');

let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');

let nameFromInput = document.querySelector('.popup__input_type_name');
let jobFromInput = document.querySelector('.popup__input_type_job');

function openPopup () {
   popup.classList.add('popup_is-open')
   nameFromInput.value = name.textContent;
   jobFromInput.value = job.textContent;
}

function closePopup() {
   popup.classList.remove('popup_is-open')
}

popupCloseButton.addEventListener('click', closePopup);

function formSubmit(event) {
   event.preventDefault();
   closePopup();
   name.textContent = nameFromInput.value;
   job.textContent = jobFromInput.value;
}

form.addEventListener('submit', formSubmit);

editButton.addEventListener('click', openPopup);