export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array.keys()) {
    /* eslint-disable no-param-reassign */
    const value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
