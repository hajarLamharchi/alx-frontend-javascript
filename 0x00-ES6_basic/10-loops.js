export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array.keys()) {
    const value = appendString + array[idx];
    /* eslint-disable no-param-reassign */
    array[idx] = value;
  }

  return array;
}
