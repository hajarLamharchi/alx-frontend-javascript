export default function handleResponseFromAPI(promise) {
  const p = new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error(''));
    }
  });
  p.then(() => {
    console.log('Got a response from the API');
  }).catch(Error);
}
