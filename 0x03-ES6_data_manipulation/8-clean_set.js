export default function cleanSet(set, startString) {
  const newArray = [];
  if (startString === undefined || startString.length === 0) {
    return [].join('-');
  }
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      newArray.push(element.slice(startString.length));
    }
  });

  return newArray.join('-');
}
