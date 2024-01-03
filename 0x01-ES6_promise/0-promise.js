export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(true) {
        resolve(true);
      }
      else {
        reject(false);
      }
    }, 2000);
  });
}
