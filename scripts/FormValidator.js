export default class FormValidator {
   constructor(config, formElement) {
       this._formElement = formElement;
       this._config = config;
       this._saveButton = formElement.querySelector(this._config.submitButtonSelector);
   }

    _showInputError = (inputElement) => {
        const spanError = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        spanError.textContent = inputElement.validationMessage;
        spanError.classList.add(this._config.spanErrorClass);
    }

     _hideInputError = (inputElement) => {
        const spanError = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        spanError.textContent = '';
        spanError.classList.remove(this._config.spanErrorClass);
    }

     _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }

        this._toggleButtonState();
    }

    _setInputsEventListeners() {
        const inputArray = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));

        inputArray.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    enableValidation() {

        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this._toggleButtonState();
        });
        this._setInputsEventListeners();
    }

    _toggleButtonState = () => {
        if (!this._formElement.checkValidity()) {
            this._saveButton.classList.add(this._config.inactiveButtonClass);
            this._saveButton.disabled = true;
        } else {
            this._saveButton.classList.remove(this._config.inactiveButtonClass);
            this._saveButton.disabled = false;
        }
    }
}


