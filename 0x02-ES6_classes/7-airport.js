export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new TypeError();
    } else {
      this._name = name;
      this._code = code;
    }
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError();
    } else {
      this._name = value;
    }
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError();
    } else {
      this._code = value;
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
