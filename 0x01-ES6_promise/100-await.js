import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = new uploadPhoto();
  const user = new createUser();

  try {
    return {
        photo,
        user,
    };
  } catch (error) {
    return {};
  }
}
