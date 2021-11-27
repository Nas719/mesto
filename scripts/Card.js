class Card {
    constructor(name, link, cardTemplate) {
        this._name = name;
        this._link = link;
        this._blockTemplate = cardTemplate.getElementById('.element-li').cloneNode(true);
    }

    _createCard() {
        this._blockTemplate.querySelector('.element__item-image').alt = this._link;
        this._blockTemplate.querySelector('.element__item-image').link = this.name;
        this._blockTemplate.querySelector('.element__item-name').textContent = this.name;

        this._cardButtonLike();
        this._cardDeleteIcon();
        this._cardImg();

        return this._blockTemplate;
    }

    _cardButtonLike() {
        this._blockTemplate.querySelector('.element__item-like').addEventListener('click', function () {
            cardButtonLike.classList.toggle('element__item-like_active');
    })

    _cardDeleteIcon() {
        this._blockTemplate.querySelector('.element__delete-icon').addEventListener('click', (evt) => {
            evt.target.closest('.element-li').remove();
        })
    }

    _cardImg() {
        this._blockTemplate.querySelector('.popup__image').addEventListener('click', () => {
            popupImg.querySelector('.element__item-image').alt = this._name;
            popupImg.querySelector('.element__item-image').link = this._link;
            popupImg.querySelector('.popup__caption').textContent = this._name;
            openPopup(popupImage);
        })
    }

    renderCard() {
            document.querySelector('.element-li').prepend(this._createCard());
        }
    }

export default Card;