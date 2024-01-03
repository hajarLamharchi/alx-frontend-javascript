import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promiseSignUpUser = signUpUser(firstName, lastName);
  const promiseUploadPhoto = uploadPhoto(fileName);

  return Promise.allSettled([promiseSignUpUser, promiseUploadPhoto]).then((results) => {
    const resultArray = [];
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        resultArray.push({ status: result.status, value: result.value });
      } else {
        resultArray.push({ status: result.status, value: `${result.reason}` });
      }
    });
    return resultArray;
  });
}
