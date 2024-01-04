export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') {
      throw new TypeError();
    } else {
      this._size = size;
      this._location = location;
    }
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError();
    } else {
      this._size = value;
    }
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError();
    } else {
      this._location = value;
    }
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
