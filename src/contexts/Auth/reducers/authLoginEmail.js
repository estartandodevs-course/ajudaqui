import { AuthActionsTypes } from "../types";

export const AuthLoginEmailReducer = (state, { payload }) => {
  const REDUCERS = {
    [AuthActionsTypes.LOGIN_EMAIL_START]: {
      ...state,
      loadingAuth: true,
    },
    [AuthActionsTypes.LOGIN_EMAIL_SUCESS]: {
      ...state,
      ...payload,
      isAuthenticated: true,
      loadingAuth: false,
    },
    [AuthActionsTypes.LOGIN_EMAIL_ERROR]: {
      ...state,
      ...payload,
      isAuthenticated: false,
      loadingAuth: false,
    },
    [AuthActionsTypes.LOGOUT_EMAIL_START]: {
      ...state,
      loadingAuth: true,
    },
    [AuthActionsTypes.LOGOUT_EMAIL_SUCESS]: {
      ...state,
      ...payload,
      isAuthenticated: true,
      loadingAuth: false,
    },
    [AuthActionsTypes.LOGOUT_EMAIL_ERROR]: {
      ...state,
      ...payload,
      isAuthenticated: false,
      loadingAuth: false,
    },
  };
  return REDUCERS;
};
