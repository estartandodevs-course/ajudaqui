export const userDataModel = {
  uuid: "",
  name: "",
  email: "",
  grade: 0,
  photoURL: "",
  profileType: "",
  birthday: "",
  gender: "",
  phoneNumber: null,
  location: {
    uf: "",
    city: "",
    adress: "",
  },
};

export const modelByProfile = {
  elderly: {
    ...userDataModel,
    helpPreferrence: "",
    health: {
      medicine: [],
      specialConditions: "",
    },
    contacts: [],
  },
  voluntary: {
    ...userDataModel,
    interests: [],
  },
};

export const initialStateAuthReducer = {
  isAuthenticated: false,
  loadingAuth: false,
  profileType: "voluntary",
  user: userDataModel,
  authIsLoading: false,
  error: null,
};

export const authContextModel = {
  dispatch: () => {},
  state: initialStateAuthReducer,
};
