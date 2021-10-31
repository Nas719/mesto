function hideInputError(spanError, saveButton, inputElement) {
    spanError.textContent = '';
    saveButton.classList.remove('popup__save-button_inactive');
    inputElement.style.borderBottom = "1px solid rgba(0,0,0,.2)";
}

function showInputError(spanError, saveButton, inputElement) {
    spanError.textContent = inputElement.validationMessage;
    saveButton.classList.add('popup__save-button_inactive');
    inputElement.style.borderBottom = '1px solid #FF0000';
}

//проверять есть ошибка или нет
function checkInputValidity(formElement, inputElement) {
    const spanError = formElement.querySelector(`.${inputElement.id}-error`);
    const saveButton = formElement.querySelector('.popup__save-button');
    if (inputElement.validity.valid) {
        hideInputError(spanError, saveButton, inputElement);
    } else {
        showInputError(spanError, saveButton, inputElement);
    }
}
// Находим все инпуты формы
function setInputsEventListeners(formElement) {
    const inputArray = formElement.querySelectorAll('.popup__input');
    inputArray.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
        });
    });
}

// Стартовать и найти все формы, убрать отправку на сервер
function enableValidation() {
    const formArray = Array.from(document.querySelectorAll('.popup__form'));
    console.log(formArray)
    formArray.forEach((formElement) => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        setInputsEventListeners(formElement);
    });
}

enableValidation();