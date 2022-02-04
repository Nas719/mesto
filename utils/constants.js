export const initialCards = [
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

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    closeButtonSelector: '.popup__close-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    spanErrorClass: 'popup__span-error_active',
};

export const cardListSelector = ".element";
export const popupCloseButtonSelector = ".popup__close-button";
export const popupClassSelector = "popup";
export const popupImageSelector = ".popup__image";
export const popupProfileSelector = "popup-profile";
export const popupCardSelector = "popup-card";
export const popupCaptionSelector = ".popup__caption";
export const cardImagePopupId = "popup-img";
export const formSelector = ".popup__form";
export const formInputSelector = ".popup__input";
export const profileNameSelector = "input-name";
export const profileJobSelector = "input-job";