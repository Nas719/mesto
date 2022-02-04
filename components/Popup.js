import {popupCloseButtonSelector, popupClassSelector} from "../utils/constants.js";

//отвечает за открытие и закрытие попапа
export default class Popup {
    constructor(popupSelector) {
        this._popup = document.getElementById(popupSelector);
        this._closeButton = document.querySelector(popupCloseButtonSelector);
    }

    //открытие попапа
    open() {
        this._popup.classList.add('popup_is-open');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    //закрытие попапа
    close() {
        this._popup.classList.remove('popup_is-open');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    //закрытие попапа на Esc
    _handleEscClose(event) {
        if (event.key === "Escape") {
            this.close();
        }
    }

    //добавляет слушатель клика иконке закрытия попапа и закрывается при клике на затемнённую область вокруг формы
    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close();
        })

        this._popup.addEventListener('click', (event) => {
            if (event.target.classList.contains(popupClassSelector)) {
                this.close(event.target);
            }
        })
    }
}