import {config} from "./configValidation.js";

class FormValidator {
   constructor(config, form) {
       this._config = config;
       this._form = form;
       // this._inputSelector = config.inputSelector;
       // this._submitButtonSelector = config.submitButtonSelector;
       // this._inactiveButtonClass = config.inactiveButtonClass;
       // this._inputErrorClass = config.inputErrorClass;
       // this._spanErrorClass = config.spanErrorClass;
       // this._formElement = formElement;
       // this._saveButton = this._formElement.querySelector('this._submitButtonSelector');
       // this._inputArray = Array.from(this._formElement.querySelectorAll(this._inputSelector));
   }

    _showInputError(config, formElement, inputElement) {
        const spanError = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        spanError.textContent = inputElement.validationMessage;
        spanError.classList.add(this._config.spanErrorClass);
    }

    _hideInputError(config, formElement, inputElement) {
        const spanError = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        spanError.textContent = '';
        spanError.classList.remove(this._config.spanErrorClass);
    }

    _checkInputValidity(config, formElement, inputElement, saveButton) {
    if (!inputElement.validity.valid) {
        this._showInputError(config, formElement, inputElement);
    } else {
        this._hideInputError(config, formElement, inputElement);
    }
        this._toggleButtonState(config, formElement, saveButton);
}

    _setInputsEventListeners(config, formElement, saveButton) {
    const inputArray = Array.from(formElement.querySelectorAll(this._config.inputSelector));

        inputArray.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(config, formElement, inputElement, saveButton);
            this._toggleButtonState(config, formElement, saveButton);
        });
    });
        console.log(setInputsEventListeners());
}
    enableValidation() {
    const formArray = Array.from(document.querySelectorAll(this._config.formSelector));

    formArray.forEach((formElement) => {
        const saveButton = formElement.querySelector(this._config.submitButtonSelector);
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            if (this._form.id !== "popup-form-profile") {
                this._form.reset();
            }
            this._toggleButtonState(config, formElement, saveButton);
        });
        this._setInputsEventListeners(config, formElement, saveButton);
    });

}

    _toggleButtonState(config, formElement, saveButton) {
    if (!formElement.checkValidity()) {
        saveButton.classList.add(this._config.inactiveButtonClass);
        saveButton.disabled = true;
    } else {
        saveButton.classList.remove(this._config.inactiveButtonClass);
        saveButton.disabled = false;
    }
}
}

export default FormValidator;