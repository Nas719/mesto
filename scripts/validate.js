function hideInputError(config, spanError, saveButton, inputElement) {
    spanError.textContent = '';
    inputElement.style.borderBottom = "1px solid rgba(0,0,0,.2)";
}

function showInputError(config, spanError, saveButton, inputElement) {
    spanError.textContent = inputElement.validationMessage;
    inputElement.style.borderBottom = '1px solid #FF0000';
}

function checkInputValidity(config, formElement, inputElement) {
    const spanError = formElement.querySelector(`.${inputElement.id}-error`);
    const saveButton = formElement.querySelector(config.submitButtonSelector);
    if (inputElement.validity.valid) {
        hideInputError(config, spanError, saveButton, inputElement);
    } else {
        showInputError(config, spanError, saveButton, inputElement);
    }

    if (formElement.checkValidity()) {
        if (saveButton.classList.contains(config.inactiveButtonClass)) {
            saveButton.classList.remove(config.inactiveButtonClass);
        }
        saveButton.disabled = false;
    } else {
        if (!saveButton.classList.contains(config.inactiveButtonClass)) {
            saveButton.classList.add(config.inactiveButtonClass);
        }
        saveButton.disabled = true;
    }
}

function setInputsEventListeners(config, formElement) {
    const inputArray = Array.from(formElement.querySelectorAll(config.inputSelector));
    inputArray.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(config, formElement, inputElement);
        });
    });
}

function enableValidation(config) {
    const formArray = Array.from(document.querySelectorAll(config.formSelector));
    console.log(formArray)
    formArray.forEach((formElement) => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        setInputsEventListeners(config, formElement);
    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
});