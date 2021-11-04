import { AuthActionsTypes } from '../types';

export const AuthProfileType = () => {
  const REDUCERS = {
    [AuthActionsTypes.PROFILE_TYPE]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  };
  return REDUCERS;
};
