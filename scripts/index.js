const popupProfile = document.getElementById('popup-profile');
const popupCard = document.getElementById('popup-card');
const popupImage = document.getElementById('popup-img');

const cardsList = document.querySelector('.element');

const popupProfileCloseButton = document.getElementById('close-button-popup');
const popupCardCloseButton = document.getElementById('close-button-card');
const popupImageCloseButton = document.getElementById('close-button-img');

const editButtonProfile = document.querySelector('.profile__edit-button');
const openButtonCard = document.querySelector('.profile__add-button');

const formButtonProfile = document.querySelector('.popup__save-button');
const formProfile = document.getElementById('popup-form-profile');

const formCard = document.getElementById('popup-form-card');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const nameProfileFromInput = document.querySelector('.popup__input_type_name');
const jobProfileFromInput = document.querySelector('.popup__input_type_job');

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

window.addEventListener('load', ()=> {
   document.querySelectorAll('.popup').forEach((popup)=> {
      popup.classList.add('popup_transition');
   });
});

function addUlInInitialCards () {
   for (let i = 0; i < initialCards.length; i++) {
      cardsList.appendChild(createCard(initialCards[i].name, initialCards[i].link));
   }
}

addUlInInitialCards();

function createCard (name, link) {

   let card = document.getElementById('element-li').content.cloneNode(true);

   const cardDeleteIcon = card.querySelector(".element__delete-icon");
   const cardButtonLike = card.querySelector(".element__item-like");
   const cardImg = card.querySelector(".element__item-image");

   cardImg.src = link;
   card.querySelector(".element__item-name").innerHTML = name;

   cardDeleteIcon.addEventListener('click', function () {
      const delIconImg = cardDeleteIcon.closest('.element__item');
      delIconImg.remove();
   });

   cardButtonLike.addEventListener('click', function () {
      if(cardButtonLike.classList.contains('element__item-like_active')) {
         cardButtonLike.classList.toggle('element__item-like_active')
      }else {
         cardButtonLike.classList.add('element__item-like_active')
      }
   })

   cardImg.addEventListener('click', function () {
      popupImage.classList.add("popup_is-open");
      const popupImg = document.querySelector('.popup__image');
      popupImg.src = cardImg.closest('.element__item-image').src;
      const  popupHeading = document.querySelector('.popup__caption');
      popupHeading.innerHTML = name;
   });

   return card;
}

function openPopupProfile() {
   popupProfile.classList.add('popup_is-open');
   nameProfileFromInput.value = nameProfile.textContent;
   jobProfileFromInput.value = jobProfile.textContent;
}

function closePopupProfile() {
   popupProfile.classList.remove('popup_is-open');
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

function submitProfileForm(event) {
   event.preventDefault();
   closePopupProfile();
   nameProfile.textContent = nameProfileFromInput.value;
   jobProfile.textContent = jobProfileFromInput.value;
}

function submitCardForm(event) {
   event.preventDefault();

   const cardName = document.getElementById('card-name');
   const cardImgLink = document.getElementById('card-img-link');

   cardsList.prepend(createCard(cardName.value, cardImgLink.value));
   cardName.value = "";
   cardImgLink.value = "";

   closePopupCard();
}

formProfile.addEventListener('submit', submitProfileForm);

formCard.addEventListener('submit', submitCardForm);

editButtonProfile.addEventListener('click', openPopupProfile);

openButtonCard.addEventListener('click', openPopupCard);

popupProfileCloseButton.addEventListener('click', closePopupProfile);

popupCardCloseButton.addEventListener('click', closePopupCard);

popupImageCloseButton.addEventListener('click', closePopupImage);
