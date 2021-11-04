import { emailProviderLogin, emailProviderRegister } from './firebase/authEmail';
import { googleProviderLogin } from './firebase/authGoogle';
import { getByKey, save, update } from './firebase/handlers';
import { http } from './http';

const basePath = process.env.REACT_APP_FB_BASE_PATH;

export const loginWithGoogle = async (profileType, profileData) => {
  const {
    user,
    idToken,
    isNewUser,
  } = await googleProviderLogin();

  if (isNewUser) {
    const newUser = await save(
      `${basePath}/${profileType}s`,
      { ...profileData, ...user, profileType },
    );

    http.post(
      'new-user-ajudaqui',
      {
        userEmail: newUser.email,
      },
      {
        baseURL: 'https://poker-champioship.herokuapp.com/',
      },
    );

    return {
      user: newUser,
      idToken,
    };
  }

  const userData = await getByKey(
    `${basePath}/${profileType}s`,
    'email',
    user.email,
  );

  return {
    user: userData,
    idToken,
  };
};

export const registerWithEmailAndPassword = async (credentials, profileType, profileData) => {
  const {
    user,
    idToken,
    isNewUser,
  } = await emailProviderRegister(credentials);

  const { name } = credentials;

  if (isNewUser) {
    const newUser = await save(
      `${basePath}/${profileType}s`,
      {
        ...profileData, ...user, name, profileType,
      },
    );

    http.post(
      'new-user-ajudaqui',
      {
        userEmail: newUser.email,
      },
      {
        baseURL: 'https://poker-champioship.herokuapp.com/',
      },
    );

    return {
      user: newUser,
      idToken,
    };
  }

  const userData = await getByKey(
    `${basePath}/${profileType}s`,
    'email',
    user.email,
  );

  return {
    user: userData,
    idToken,
  };
};

export const loginWithEmailAndPassword = async (credentials, profileType, profileData) => {
  const {
    user,
    idToken,
    isNewUser,
  } = await emailProviderLogin(credentials);

  if (isNewUser) {
    const newUser = await save(
      `${basePath}/${profileType}s`,
      { ...profileData, ...user, profileType },
    );

    return {
      user: newUser,
      idToken,
    };
  }

  const userData = await getByKey(
    `${basePath}/${profileType}s`,
    'email',
    user.email,
  );

  return {
    user: userData,
    idToken,
  };
};

export const updateUserData = async (profileType, id, profileData) => {
  const response = await update(
    `${basePath}/${profileType}s`,
    id,
    profileData,
  );

  return response;
};
