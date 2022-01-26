import Popup from './Popup';
import {popupImageSelector, popupCaptionSelector} from "../utils/constants";

//этот класс наследуется от Popup(попап картинки)
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector(popupImageSelector);
        this._popupCaption = this._popup.querySelector(popupCaptionSelector);
    }

    setPopupImageInfo({imageSrc, title}) {
        this._popupImage.src = imageSrc;
        this._popupImage.alt = title;
        this._popupCaption.textContent = title;
    }
}
