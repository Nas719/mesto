const popupProfile = document.querySelector('.popup');
const popupCard = document.querySelectorAll('.popup')[1];

let cardsList = document.querySelector('.element');

const popupProfileCloseButton = document.querySelector('.popup__close-button');
const popupCardCloseButton = document.querySelectorAll('.popup__close-button')[1];
const editButtonProfile = document.querySelector('.profile__edit-button');
const addButtonCard = document.querySelector('.profile__add-button');

const formButtonProfile = document.querySelector('.popup__save-button');
const form = document.querySelector('.popup__form');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

let nameProfileFromInput = document.querySelector('.popup__input_type_name');
let JobProfileFromInput = document.querySelector('.popup__input_type_job');

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

function addUlInInitialCards () {

   for (i = 0; i < initialCards.length; i++) {

      let itemCard = document.createElement('li');
      itemCard.classList.add('element__item');

      let itemCardImg = document.createElement('img');
      itemCardImg.classList.add('element__item-image');

      let itemCardContainer = document.createElement('div');
      itemCardContainer.classList.add('element__container');

      let itemCardHeading = document.createElement('h2');
      itemCardHeading.classList.add('element__item-name');

      let itemCardButton = document.createElement('button');
      itemCardButton.classList.add('element__item-like');

      itemCardImg.src = initialCards[i].link;
      itemCardHeading.innerHTML = initialCards[i].name;

      itemCardContainer.appendChild(itemCardHeading);
      itemCardContainer.appendChild(itemCardButton);

      itemCard.appendChild(itemCardImg);
      itemCard.appendChild(itemCardContainer);

      cardsList.appendChild(itemCard);
   }
}

addUlInInitialCards();

function openPopupProfile () {
   popupProfile.classList.add('popup_is-open')
   nameProfileFromInput.value = nameProfile.textContent;
   JobProfileFromInput.value = jobProfile.textContent;
}

function openPopupCard () {
   popupCard.classList.add('popup_is-open')
   // nameFromInput.value = name.textContent;
   // jobFromInput.value = job.textContent;
}

function closePopupProfile() {
   popupProfile.classList.remove('popup_is-open')
}

function closePopupCard() {
   popupCard.classList.remove('popup_is-open')
}

function formSubmit(event) {
   event.preventDefault();
   closePopupProfile();
   nameProfile.textContent = nameProfileFromInput.value;
   jobProfile.textContent = JobProfileFromInput.value;
}

form.addEventListener('submit', formSubmit);

editButtonProfile.addEventListener('click', openPopupProfile);

addButtonCard.addEventListener('click', openPopupCard);

popupProfileCloseButton.addEventListener('click', closePopupProfile);

popupCardCloseButton.addEventListener('click', closePopupCard);