const showInputError = (config, formElement, inputElement) => {
    const spanError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    spanError.textContent = inputElement.validationMessage;
    spanError.classList.add(config.spanErrorClass);
}

const hideInputError = (config, formElement, inputElement) => {
    const spanError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    spanError.textContent = '';
    spanError.classList.remove(config.spanErrorClass);
}

const checkInputValidity = (config, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(config, formElement, inputElement);
    } else {
        hideInputError(config, formElement, inputElement);
    }

    const saveButton = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(config, formElement, saveButton);
}

function setInputsEventListeners(config, formElement) {
    const inputArray = Array.from(formElement.querySelectorAll(config.inputSelector));

    inputArray.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(config, formElement, inputElement);
            toggleButtonState(formElement, saveButton);
        });
    });
}

function enableValidation(config) {
    const formArray = Array.from(document.querySelectorAll(config.formSelector));
    formArray.forEach((formElement) => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        setInputsEventListeners(config, formElement);
    });
}

const toggleButtonState = (config, formElement, saveButton) => {
    if (!formElement.checkValidity()) {
        saveButton.classList.add(config.inactiveButtonClass);
        saveButton.disabled = true;
    } else {
        saveButton.classList.remove(config.inactiveButtonClass);
        saveButton.disabled = false;
    }
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    spanErrorClass: 'popup__span-error_active',
});