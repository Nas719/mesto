const popupProfile = document.querySelector('.popup');
const popupCard = document.querySelectorAll('.popup')[1];
const popupImage = document.querySelector('.popup')[2];

let cardsList = document.querySelector('.element');

const popupProfileCloseButton = document.querySelector('.popup__close-button');
const popupCardCloseButton = document.querySelectorAll('.popup__close-button')[1];
const popupImageCloseButton = document.querySelector('.popup__close-button')[2];
const editButtonProfile = document.querySelector('.profile__edit-button');
const openButtonCard = document.querySelector('.profile__add-button');

const formButtonProfile = document.querySelector('.popup__save-button');
const form = document.querySelector('.popup__form');

const formCard = document.querySelectorAll('.popup__form')[1];

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

function createCard (name, link) {
   let itemCard = document.createElement('li');
   itemCard.classList.add('element__item');

   let itemCardImg = document.createElement('img');
   itemCardImg.classList.add('element__item-image');

   let itemCardContainer = document.createElement('div');
   itemCardContainer.classList.add('element__container');

   let itemCardHeading = document.createElement('h2');
   itemCardHeading.classList.add('element__item-name');

   let itemCardButtonLike = document.createElement('button');
   itemCardButtonLike.classList.add('element__item-like');

   let itemCardDeleteIcon = document.createElement('button');
   itemCardDeleteIcon.classList.add('element__delete-icon');

   itemCardDeleteIcon.addEventListener('click', function () {
      const delIconImg = itemCardDeleteIcon.closest('.element__item');
      delIconImg.remove();
   });

   itemCardButtonLike.addEventListener('click', function () {
      if(itemCardButtonLike.classList.contains('element__item-like_active')) {
         itemCardButtonLike.classList.remove('element__item-like_active')
      }else {
         itemCardButtonLike.classList.add('element__item-like_active')
      }
   })

   itemCardImg.addEventListener('click', function () {
      const openImage = itemCardImg.closest('.element__item');

   })

   itemCardImg.src = link;
   itemCardHeading.innerHTML = name;

   itemCardContainer.appendChild(itemCardHeading);
   itemCardContainer.appendChild(itemCardButtonLike);

   itemCard.appendChild(itemCardImg);
   itemCard.appendChild(itemCardContainer);
   itemCard.appendChild(itemCardDeleteIcon);

   return itemCard;
}

function addUlInInitialCards () {
   for (i = 0; i < initialCards.length; i++) {
      cardsList.appendChild(createCard(initialCards[i].name, initialCards[i].link));
   }
}

addUlInInitialCards();

function openPopupProfile() {
   popupProfile.classList.add('popup_is-open');
   nameProfileFromInput.value = nameProfile.textContent;
   JobProfileFromInput.value = jobProfile.textContent;
}

function closePopupProfile() {
   popupProfile.classList.remove('popup_is-open');
}

function openPopupImage() {
   popupImage.classList.add('popup_is-open');
}

function closePopupImage() {
   popupImage.classList.remove('popup_is-open');
}

function openPopupCard () {
   popupCard.classList.add('popup_is-open');
}

function closePopupCard() {
   popupCard.classList.remove('popup_is-open');
}

function deleteIconImage() {
   document.getElementById('img').remove();
}

function formSubmit(event) {
   event.preventDefault();
   closePopupProfile();
   nameProfile.textContent = nameProfileFromInput.value;
   jobProfile.textContent = JobProfileFromInput.value;
}

function formCardSubmit(event) {
   event.preventDefault();

   let cardName = document.querySelectorAll('.popup__input_type_name')[1].value;
   let cardImgLink = document.querySelectorAll('.popup__input_type_job')[1].value;

   cardsList.prepend(createCard(cardName, cardImgLink));

   closePopupCard();
}

form.addEventListener('submit', formSubmit);

formCard.addEventListener('submit', formCardSubmit);

editButtonProfile.addEventListener('click', openPopupProfile);

openButtonCard.addEventListener('click', openPopupCard);

popupProfileCloseButton.addEventListener('click', closePopupProfile);

popupCardCloseButton.addEventListener('click', closePopupCard);

imagePopup.addEventListener('click', openPopupImage);

namePopup.addEventListener('click', closePopupImage);