export default function createIteratorObject(report) {
  const result = [];
  Object.keys(report).forEach((key) => {
    const value = report[key];
    Object.keys(value).forEach((k) => {
      const v = value[k];
      for (const i of v) {
        result.push(i);
      }
    });
  });
  return result;
}
