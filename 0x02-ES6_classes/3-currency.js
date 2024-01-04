export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError();
    } else if (typeof name !== 'string') {
      throw new TypeError();
    } else {
      this._code = code;
      this._name = name;
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError();
    } else {
      this._code = value;
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError();
    } else {
      this._name = value;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
