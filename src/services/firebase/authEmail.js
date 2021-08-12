import { firebaseAuth } from "./config";

export const emailProviderRegister = async ({ email, password }) => {
  const result = await firebaseAuth.createUserWithEmailAndPassword(email, password);

  const idToken = await firebaseAuth.currentUser.getIdToken();

  const {
    user: {
      displayName,
      photoURL,
      uid,
      phoneNumber,
    },
    additionalUserInfo: {
      isNewUser,
    },
  } = result;

  const user = {
    name: displayName,
    displayName,
    photoURL,
    email,
    uuid: uid,
    phoneNumber,
  };

  return {
    user,
    idToken,
    isNewUser,
  };
};

export const emailProviderLogin = async ({ email, password }) => {
  const result = await firebaseAuth.signInWithEmailAndPassword(email, password);

  const idToken = await firebaseAuth.currentUser.getIdToken();

  const {
    user: {
      displayName,
      photoURL,
      uid,
      phoneNumber,
    },
    additionalUserInfo: {
      isNewUser,
    },
  } = result;

  const user = {
    name: displayName,
    displayName,
    photoURL,
    email,
    uuid: uid,
    phoneNumber,
  };

  return {
    user,
    idToken,
    isNewUser,
  };
};
