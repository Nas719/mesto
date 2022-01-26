import {popupCloseButtonSelector, popupClassSelector} from "../utils/constants";

export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = document.querySelector(popupCloseButtonSelector);
    }

    open() {
        this._popup.classList.add('popup_is-open');
        document.addEventListener('keydown', _handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_is-open');
        document.removeEventListener('keydown', _handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === "Escape") {
            const popup = document.querySelector('.popup_is-open');
            this.close();
        }
    }

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