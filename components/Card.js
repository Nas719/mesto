export default class Card {
    constructor(data, blockTemplate, popupImage, openPopup) {
        this._name = data.name;
        this._link = data.link;
        this._blockTemplate = blockTemplate;
        this._popupImage = popupImage;
        this._openPopup = openPopup;
        this._view = this._getCardTemplate();
        this._likeIcon = this._view.querySelector('.element__item-like');
        this._deleteIcon = this._view.querySelector('.element__delete-icon');
        this._cardImg = this._view.querySelector('.element__item-image');
    }

    _getCardTemplate() {
        const cardElement = this._blockTemplate.cloneNode(true);

        return cardElement;
    }

    renderCard() {

        this._view.querySelector(".element__item-name").textContent = this._name;

        this._cardImg.src = this._link;
        this._cardImg.alt = this._name;

        this._setEventListeners();

        return this._view;
    }

    _setEventListeners() {

        this._likeIcon.addEventListener('click', () => this._handleLikeClick());

        this._deleteIcon.addEventListener('click', () => this._handleDeleteClick());

        this._cardImg.addEventListener('click', () => this._handleImgClick());
    }

    _handleLikeClick() {
        this._likeIcon.classList.toggle('element__item-like_active');
    }

    _handleDeleteClick() {
        this._view.remove()
        this._view= null;
    }

    _handleImgClick() {
        const popupImg = document.querySelector('.popup__image');
        popupImg.src =  this._link;
        popupImg.alt =  this._name;
        document.querySelector('.popup__caption').textContent = this._name;
        this._openPopup(this._popupImage);
    }

}