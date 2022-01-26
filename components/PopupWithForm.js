import Popup from "./Popup";
import {formSelector, formInputSelector} from "../utils/constants";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSubmit}) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._form = this._popup.querySelector(formSelector);
        this._inputList = this._form.querySelectorAll(formInputSelector);
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._formSubmit(this._getInputValues());
        this._form.reset();
        })
    }

    close() {
        super.close();
        this._form.reset();
    }


}