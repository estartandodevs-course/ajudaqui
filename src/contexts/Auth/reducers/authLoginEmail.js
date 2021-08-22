import { AuthActionsTypes } from "../types";

export const AuthLoginEmailReducer = () => {
  const REDUCERS = {
    [AuthActionsTypes.LOGIN_EMAIL_START]: (state) => ({
      ...state,
      loadingAuth: true,
    }),
    [AuthActionsTypes.LOGIN_EMAIL_SUCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: true,
      loadingAuth: false,
    }),
    [AuthActionsTypes.LOGIN_EMAIL_ERROR]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: false,
      loadingAuth: false,
    }),
    [AuthActionsTypes.LOGOUT_EMAIL_START]: (state) => ({
      ...state,
      loadingAuth: true,
    }),
    [AuthActionsTypes.LOGOUT_EMAIL_SUCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: true,
      loadingAuth: false,
    }),
    [AuthActionsTypes.LOGOUT_EMAIL_ERROR]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: false,
      loadingAuth: false,
    }),
  };
  return REDUCERS;
};
