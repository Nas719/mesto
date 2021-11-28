class FormValidator {
   constructor(config) {
        this._config = config;
   }

    _showInputError = (formElement, inputElement) => {
        const spanError = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        spanError.textContent = inputElement.validationMessage;
        spanError.classList.add(this._config.spanErrorClass);
    }

     _hideInputError = (formElement, inputElement) => {
        const spanError = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        spanError.textContent = '';
        spanError.classList.remove(this._config.spanErrorClass);
    }

     _checkInputValidity = (formElement, inputElement, saveButton) => {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement);
        } else {
            this._hideInputError(formElement, inputElement);
        }

        this._toggleButtonState(formElement, saveButton);
    }

    _setInputsEventListeners(formElement, saveButton) {
        const inputArray = Array.from(formElement.querySelectorAll(this._config.inputSelector));

        inputArray.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement, saveButton);
                this._toggleButtonState(formElement, saveButton);
            });
        });
    }

    enableValidation() {
        const formArray = Array.from(document.querySelectorAll(this._config.formSelector));

        formArray.forEach((formElement) => {
            const saveButton = formElement.querySelector(this._config.submitButtonSelector);
            formElement.addEventListener('submit', (event) => {
                event.preventDefault();
                if (formElement.id !== "popup-form-profile") {
                    formElement.reset();
                }
                this._toggleButtonState(formElement, saveButton);
            });
            this._setInputsEventListeners(formElement, saveButton);
        });
    }

    _toggleButtonState = (formElement, saveButton) => {
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


