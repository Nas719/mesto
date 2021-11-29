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
        this._handleLikeIcon();
        this._handleDeleteIcon();
        this._setcardImg();
        this._view.querySelector(".element__item-name").textContent = this._name;

        return this._view;
    }

    _handleLikeIcon() {
        const handleLikeIcon = this._view.querySelector('.element__item-like');
        handleLikeIcon.addEventListener('click', function () {
            handleLikeIcon.classList.toggle('element__item-like_active');
        });
    }

    _handleDeleteIcon() {
        const handleDeleteIcon = this._view.querySelector('.element__delete-icon');
        handleDeleteIcon.addEventListener('click', function () {
            const delIconImg = handleDeleteIcon.closest('.element__item');
            delIconImg.remove();
        });
    }

    _setcardImg() {
        const setcardImg = this._view.querySelector('.element__item-image');
        setcardImg.src = this._link;
        setcardImg.alt = this._name;
        setcardImg.addEventListener('click', () => {
            const popupImg = document.querySelector('.popup__image');
            popupImg.src =  this._link;
            popupImg.alt =  this._name;
            document.querySelector('.popup__caption').textContent = this._name;
            this._openPopup(this._popupImage);
        });
    }
}

export default Card;