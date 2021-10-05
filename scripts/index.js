const popup = document.querySelector('.popup');
const  popupCloseButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');

const formButton = document.querySelector('.popup__save-button');
const form = document.querySelector('.popup__form');

let name = document.querySelector('.profile__name').innerHTML;
let profession = document.querySelector('.profile__profession').innerHTML;

function openPopup () {
   popup.classList.add('popup_isOpen')
   document.querySelector('.popup__name').value = name;
   document.querySelector('.popup__profession').value = profession;
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
   name = document.querySelector('.popup__name').value;
   profession = document.querySelector('.popup__profession').value;
   document.querySelector('.profile__name').innerHTML = name;
   document.querySelector('.profile__profession').innerHTML = profession;
}

formButton.addEventListener('click', function () {
})

form.addEventListener('submit', formSubmit);
