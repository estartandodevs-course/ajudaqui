import { AuthLoginGoogleReducer } from "./authLoginGoogle";
import { AuthLoginEmailReducer } from "./authLoginEmail";
import { AuthLoginPhoneReducer } from "./authLoginPhone";
import { AuthProfileType } from "./authProfileType";

export const AuthReducer = (state, action) => {
  if (!action.type) {
    return state;
  }
  const REDUCERS = {
    ...AuthProfileType(state, action),
    ...AuthLoginEmailReducer(state, action),
    ...AuthLoginPhoneReducer(state, action),
    ...AuthLoginGoogleReducer(state, action),
  };

  return REDUCERS[action.type];
};
