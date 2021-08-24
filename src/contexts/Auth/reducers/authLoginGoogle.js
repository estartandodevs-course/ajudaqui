
import { AuthActionsTypes } from "../types";

export const AuthLoginGoogleReducer = () => {
  const REDUCERS = {
    [AuthActionsTypes.LOGIN_GOOGLE_START]: (state) => ({
      ...state,
      loadingAuth: true,
    }),
    [AuthActionsTypes.LOGIN_GOOGLE_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: true,
      loadingAuth: false,
    }),
    [AuthActionsTypes.LOGIN_GOOGLE_ERROR]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: false,
      loadingAuth: false,
    }),
    [AuthActionsTypes.LOGOUT_GOOGLE_START]: (state) => ({
      ...state,
      loadingAuth: true,
    }),
    [AuthActionsTypes.LOGOUT_GOOGLE_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: true,
      loadingAuth: false,
    }),
    [AuthActionsTypes.LOGOUT_GOOGLE_ERROR]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: false,
      loadingAuth: false,
    }),
  };
  return REDUCERS;
};


