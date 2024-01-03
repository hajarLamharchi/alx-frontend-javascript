export default function handleResponseFromAPI(promise) {
  let data = '';
  promise
    .then(() => { data = { status: 200, body: 'Success' }; })
    .catch(() => { data = new Error(); })
    .finally(() => { console.log('Got a response from the API'); });
  return data;
}
