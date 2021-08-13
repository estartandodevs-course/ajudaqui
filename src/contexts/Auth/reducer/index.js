import { AuthLoginGoogleReducer } from "./authLoginGoogle";
import { AuthLoginEmailReducer } from "./authLoginEmail";
import { AuthLoginPhoneReducer } from "./authLoginPhone";
import { AuthProfileType } from "./authProfileType";
import { userData } from "../../../_mock";

export const initialStateAuthReducer = {
  isAuthenticated: false,
  loadingAuth: false,
  profileType: "voluntary",
  user: userData,
  authIsLoading: false,
  error: null,
};

export const AuthReducer = (state, action) => {
  if (!action.type) {
    return state;
  }
  const REDUCERS = {
    ...AuthProfileType(state, action),
    ...AuthLoginGoogleReducer(state, action),
    ...AuthLoginEmailReducer(state, action),
    ...AuthLoginPhoneReducer(state, action),
  };

  return REDUCERS[action.type];
};
