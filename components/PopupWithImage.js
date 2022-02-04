import Popup from './Popup.js';
import {popupImageSelector, popupCaptionSelector} from "../utils/constants.js";

//этот класс наследуется от Popup(попап картинки)
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector(popupImageSelector);
        this._popupCaption = this._popup.querySelector(popupCaptionSelector);
    }

    open({imageSrc, title}) {
        super.open();
        this._popupImage.src = imageSrc;
        this._popupImage.alt = title;
        this._popupCaption.textContent = title;
    }
}
