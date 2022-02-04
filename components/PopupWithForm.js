import Popup from "./Popup.js";
import {formSelector, formInputSelector} from "../utils/constants.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSubmit}) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._form = this._popup.querySelector(formSelector);
        this._inputList = this._form.querySelectorAll(formInputSelector);
    }

    //Собирает данные всех полей формы
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    //Добавляет обработчик клика
    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmit(this._getInputValues());
            this._form.reset();
        })
    }

    setInfo(formData) {
        this._inputList.forEach(input => input.value = formData[input.name]);
    }

    //Перезаписывает родительский close и сбрасывает форму
    close() {
        super.close();
        this._form.reset();
    }


}