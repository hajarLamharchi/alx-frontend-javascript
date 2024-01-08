export default function cleanSet(set, startString) {
  const newArray = [];
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      newArray.push(element.slice(startString.length, element.length));
    }
  });

  return newArray.join('-');
}
