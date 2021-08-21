import { AuthActionsTypes } from "../types";

export const AuthLoginPhoneReducer = () => {
  const REDUCERS = {
    [AuthActionsTypes.LOGIN_PHONE_START]: (state) => ({
      ...state,
      loadingAuth: true,
    }),
    [AuthActionsTypes.LOGIN_PHONE_SUCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: true,
      loadingAuth: false,
    }),
    [AuthActionsTypes.LOGIN_PHONE_ERROR]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: false,
      loadingAuth: false,
    }),
    [AuthActionsTypes.LOGOUT_PHONE_START]: (state) => ({
      ...state,
      loadingAuth: true,
    }),
    [AuthActionsTypes.LOGOUT_PHONE_SUCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: true,
      loadingAuth: false,
    }),
    [AuthActionsTypes.LOGOUT_PHONE_ERROR]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: false,
      loadingAuth: false,
    }),
  };
  return REDUCERS;
};
