export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((elm) => elm.startsWith(startString))
    .map((elm) => elm.slice(startString.length)).join('-');
}
