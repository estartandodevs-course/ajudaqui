import { AuthActionsTypes } from "../types";

export const AuthLoginPhoneReducer = (state, { payload }) => {
  const REDUCERS = {
    [AuthActionsTypes.LOGIN_PHONE_START]: {
      ...state,
      loadingAuth: true,
    },
    [AuthActionsTypes.LOGIN_PHONE_SUCESS]: {
      ...state,
      ...payload,
      isAuthenticated: true,
      loadingAuth: false,
    },
    [AuthActionsTypes.LOGIN_PHONE_ERROR]: {
      ...state,
      ...payload,
      isAuthenticated: false,
      loadingAuth: false,
    },
    [AuthActionsTypes.LOGOUT_PHONE_START]: {
      ...state,
      loadingAuth: true,
    },
    [AuthActionsTypes.LOGOUT_PHONE_SUCESS]: {
      ...state,
      ...payload,
      isAuthenticated: true,
      loadingAuth: false,
    },
    [AuthActionsTypes.LOGOUT_PHONE_ERROR]: {
      ...state,
      ...payload,
      isAuthenticated: false,
      loadingAuth: false,
    },
  };
  return REDUCERS;
};
