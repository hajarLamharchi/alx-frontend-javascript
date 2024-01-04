export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('TypeError: Name must be a string');
    } else if (typeof length !== 'number') {
      throw new Error('TypeError: length must be a number');
    } else if (!Array.isArray(students) || students.every((elm) => typeof elm !== 'string')) {
      throw new Error('TypeError: students must be an array of strings');
    } else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  get name() {
    return `${this._name}`;
  }

  set name(value) {
    this._name = value;
  }

  get length() {
    return `${this._length}`;
  }

  set length(value) {
    this._length = value;
  }

  get students() {
    const arrayStudents = [];
    for (const student of this._students) {
      arrayStudents.push(student);
    }
    return arrayStudents;
  }

  set students(value) {
    this._students = value;
  }
}
