import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {initialCards} from "./data.js";
import {config} from "./configValidation.js";

const popupProfile = document.getElementById('popup-profile');
const popupCard = document.getElementById('popup-card');
const popupImage = document.getElementById('popup-img');

const cardsList = document.querySelector('.element');

const popupProfileCloseButton = document.getElementById('close-button-popup');
const popupCardCloseButton = document.getElementById('close-button-card');
const popupImageCloseButton = document.getElementById('close-button-img');

const editButtonProfile = document.querySelector('.profile__edit-button');
const openButtonCard = document.querySelector('.profile__add-button');

// const formButtonProfile = document.querySelector('.popup__save-button');
const formProfile = document.getElementById('popup-form-profile');

const formCard = document.getElementById('popup-form-card');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const nameProfileFromInput = document.querySelector('.popup__input_type_name');
const jobProfileFromInput = document.querySelector('.popup__input_type_job');

// const cardName = document.getElementById('card-name');
// const cardImgLink = document.getElementById('card-img-link');

const blockTemplate = document.getElementById('element-li');
// const itemCard = document.querySelector('.element__item');
// const elementsArr = document.querySelector('.elements');


window.addEventListener('load', ()=> {
   document.querySelectorAll('.popup').forEach((popup)=> {
      popup.classList.add('popup_transition');
   });
});

function renderInitialCards() {

   for (let i = 0; i < initialCards.length; i++) {
      const card = new Card(initialCards[i].name, initialCards[i].link, blockTemplate, popupImage, openPopup);
      cardsList.appendChild(card.renderCard());
   }
}

renderInitialCards();

// function createCard() {
//    const card = new Card(name, link, blockTemplate);
//    const cardElement = card.renderCard();
//    return cardElement;
// }
//
// initialCards.forEach((item) => {
//   const card = createCard(item);
//    elementsArr.appendChild(card);
// });

// function createCard (name, link) {
//
//    const card = document.getElementById('element-li').content.cloneNode(true);
//
//    const cardDeleteIcon = card.querySelector(".element__delete-icon");
//    const cardButtonLike = card.querySelector(".element__item-like");
//    const cardImg = card.querySelector(".element__item-image");
//
//    cardImg.src = link;
//    cardImg.alt = name;
//    card.querySelector(".element__item-name").textContent = name;
//
//    cardDeleteIcon.addEventListener('click', function () {
//       const delIconImg = cardDeleteIcon.closest('.element__item');
//       delIconImg.remove();
//    });
//
//    cardButtonLike.addEventListener('click', function () {
//       cardButtonLike.classList.toggle('element__item-like_active');
//    })
//
//    cardImg.addEventListener('click', function () {
//       const popupImg = document.querySelector('.popup__image');
//       popupImg.src = cardImg.closest('.element__item-image').src;
//       popupImg.alt = cardImg.closest('.element__item-image').alt;
//       const  popupHeading = document.querySelector('.popup__caption');
//       popupHeading.textContent = name;
//       openPopup(popupImage);
//    });
//
//    return card;
// }


function openPopup(popup) {
   popup.classList.add('popup_is-open');
   document.addEventListener('keydown', closePopupByEscape);
}

function closePopupByEscape(event) {
   if (event.key === "Escape") {
      const popup = document.querySelector('.popup_is-open');
      closePopup(popup);
   }
}

function closePopup(popup) {
   popup.classList.remove('popup_is-open');
   document.removeEventListener('keydown', closePopupByEscape);
}

function openPopupProfile() {
   openPopup(popupProfile);
   nameProfileFromInput.value = nameProfile.textContent;
   jobProfileFromInput.value = jobProfile.textContent;
}

function closePopupProfile() {
   closePopup(popupProfile);
}

function closePopupImage() {
   closePopup(popupImage);
}

function openPopupCard() {
   openPopup(popupCard);
}

function closePopupCard() {
   closePopup(popupCard);
}

function submitProfileForm(event) {
   event.preventDefault();
   nameProfile.textContent = nameProfileFromInput.value;
   jobProfile.textContent = jobProfileFromInput.value;
   closePopupProfile();
}

function submitCardForm(event) {
   event.preventDefault();

   const cardName = document.getElementById('card-name');
   const cardImgLink = document.getElementById('card-img-link');

   const card = new Card(cardName.value, cardImgLink.value, blockTemplate, popupImage, openPopup);
   cardsList.prepend(card.renderCard());

   cardName.value = "";
   cardImgLink.value = "";
   closePopupCard();
}

function popupClickHandler(event) {
   const popup = document.querySelector('.popup_is-open');

   if (event.target.classList.contains('popup')) {
      closePopup(popup)
   }
}

const popupCardValidation = new FormValidator(popupCard)
popupCardValidation.enableValidation();

const popupProfileValidation = new FormValidator(popupProfile)
popupProfileValidation.enableValidation();

popupProfile.addEventListener('click', popupClickHandler);
popupCard.addEventListener('click', popupClickHandler);
popupImage.addEventListener('click', popupClickHandler);

formProfile.addEventListener('submit', submitProfileForm);

formCard.addEventListener('submit', submitCardForm);

editButtonProfile.addEventListener('click', openPopupProfile);

openButtonCard.addEventListener('click', openPopupCard);

popupProfileCloseButton.addEventListener('click', closePopupProfile);

popupCardCloseButton.addEventListener('click', closePopupCard);

popupImageCloseButton.addEventListener('click', closePopupImage);
