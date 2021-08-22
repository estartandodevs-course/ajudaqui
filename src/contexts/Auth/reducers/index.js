import { AuthLoginGoogleReducer } from "./authLoginGoogle";
import { AuthLoginEmailReducer } from "./authLoginEmail";
import { AuthLoginPhoneReducer } from "./authLoginPhone";
import { AuthProfileType } from "./authProfileType";

export const AuthReducer = (state, action) => {
  if (!action.type) {
    return state;
  }
  const REDUCERS = {
    ...AuthProfileType(),
    ...AuthLoginEmailReducer(),
    ...AuthLoginPhoneReducer(),
    ...AuthLoginGoogleReducer(),
  };

  return REDUCERS[action.type](state, action);
};
