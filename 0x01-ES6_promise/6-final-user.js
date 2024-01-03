import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promiseSignUpUser = signUpUser(firstName, lastName);
  const promiseUploadPhoto = uploadPhoto(fileName);

  return Promise.allSettled([promiseSignUpUser, promiseUploadPhoto])
    .then(([user, photo]) => [{
      status: user.status,
      value: user.value,
    },
    {
      status: photo.status,
      value: photo.value,
    }]);
}
