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

const formProfile = document.getElementById('popup-form-profile');

const formCard = document.getElementById('popup-form-card');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const nameProfileFromInput = document.querySelector('.popup__input_type_name');
const jobProfileFromInput = document.querySelector('.popup__input_type_job');

const cardName = document.getElementById('card-name');
const cardImgLink = document.getElementById('card-img-link');

const blockTemplate = document.getElementById('element-li');


window.addEventListener('load', ()=> {
   document.querySelectorAll('.popup').forEach((popup)=> {
      popup.classList.add('popup_transition');
   });
});

function renderInitialCards() {

   for (let i = 0; i < initialCards.length; i++) {
      cardsList.appendChild(createCard(initialCards[i]));
   }
}

function createCard(item) {
   const card = new Card(item.name, item.link, blockTemplate, popupImage, openPopup);
   return card.renderCard();
}

renderInitialCards();

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

   const item = {
      name: cardName.value,
      link: cardImgLink.value
   };

   cardsList.prepend(createCard(item));
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

function activateValidation () {
   const validationProfile = new FormValidator(config, formProfile)
   validationProfile.enableValidation();

   const validationCard = new FormValidator(config, formCard)
   validationCard.enableValidation();
}

activateValidation();

