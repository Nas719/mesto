const popup = document.querySelector('.popup');
const  popupCloseButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');

const formButton = document.querySelector('.popup__save-button');
const form = document.querySelector('.popup__form');

let name = document.querySelector('.profile__name').textContent;
let job = document.querySelector('.profile__job').textContent;

function openPopup () {
   popup.classList.add('popup_is-open')
   document.querySelector('.popup__input_type_name').value = name;
   document.querySelector('.popup__input_type_job').value = job;
}

function closePopup() {
   popup.classList.remove('popup_is-open')

}

popupCloseButton.addEventListener('click', closePopup)

function formSubmit(event) {
   event.preventDefault()
   closePopup();
   name = document.querySelector('.popup__input_type_name').value;
   job = document.querySelector('.popup__input_type_job').value;
   document.querySelector('.profile__name').textContent = name;
   document.querySelector('.profile__job').textContent = job;
}

form.addEventListener('submit', formSubmit);

editButton.addEventListener('click', openPopup)