export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (success) {
            const data = {
                status: 200,
                body: 'success'
            };
            resolve(data);
          } else {
            reject(new Error('The fake API is not working currently'));
          }
        }, 2000);
      });
}