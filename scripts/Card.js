class Card {
    constructor(name, link, blockTemplate, popupImage, openPopup) {
        this._name = name;
        this._link = link;
        this._blockTemplate = blockTemplate;
        this._popupImage = popupImage;
        this._openPopup = openPopup;
    }

    _getCardTemplate() {
        const cardElement = this._blockTemplate
            .content
            .cloneNode(true);

        return cardElement;
    }

    renderCard() {
        this._view = this._getCardTemplate();
        this._cardButtonLike();
        this._cardDeleteIcon();
        this._cardImg();
        this._view.querySelector(".element__item-name").textContent = this._name;

        return this._view;
    }

    _cardButtonLike() {
        const cardButtonLike = this._view.querySelector('.element__item-like');
            cardButtonLike.addEventListener('click', function () {
            cardButtonLike.classList.toggle('element__item-like_active');
        });
    }

    _cardDeleteIcon() {
        const cardDeleteIcon = this._view.querySelector('.element__delete-icon');
        cardDeleteIcon.addEventListener('click', function () {
            const delIconImg = cardDeleteIcon.closest('.element__item');
            delIconImg.remove();
        });
    }

    _cardImg() {
        const cardImg = this._view.querySelector('.element__item-image');
        cardImg.src = this._link;
        cardImg.alt = this._name;
        cardImg.addEventListener('click', () => {
            const popupImg = document.querySelector('.popup__image');
            popupImg.src =  this._link;
            popupImg.alt =  this._name;
            document.querySelector('.popup__caption').textContent = this._name;
            this._openPopup(this._popupImage);
        });
    }
}

export default Card;