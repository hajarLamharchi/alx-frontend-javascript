export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let call = 0;
  if (weakMap.get(endpoint)) {
    call = weakMap.get(endpoint);
  }

  if (call >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, call + 1);
}
