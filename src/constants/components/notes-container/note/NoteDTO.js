export default class NoteDTO {
    constructor(title, date, isFavorited, details) {
        this._title = title;
        this._date = date;
        this._isFavorited = isFavorited;
        this._details = details;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get isFavorited() {
        return this._isFavorited;
    }

    set isFavorited(value) {
        this._isFavorited = value;
    }

    get details() {
        return this._details;
    }

    set details(value) {
        this._details = value;
    }
}
