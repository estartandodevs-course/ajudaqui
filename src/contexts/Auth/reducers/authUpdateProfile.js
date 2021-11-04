import { AuthActionsTypes } from '../types';

export const AuthUpdateProfile = () => {
  const REDUCERS = {
    [AuthActionsTypes.UPDATE_PROFILE_START]: (state) => ({
      ...state,
      loadingAuth: true,
    }),
    [AuthActionsTypes.UPDATE_PROFILE_SUCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: true,
      loadingAuth: false,
    }),
    [AuthActionsTypes.UPDATE_PROFILE_ERROR]: (state, { payload }) => ({
      ...state,
      ...payload,
      isAuthenticated: false,
      loadingAuth: false,
    }),
  };
  return REDUCERS;
};
