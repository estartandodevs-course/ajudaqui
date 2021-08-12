import { googleProvider, firebaseAuth } from "./config";

export const googleProviderLogin = async () => {
  const result = await firebaseAuth.signInWithPopup(googleProvider);

  const idToken = await firebaseAuth.currentUser.getIdToken();

  const {
    user: {
      displayName,
      photoURL,
      email,
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

export const googleProviderLogout = () => firebaseAuth.signOut();
