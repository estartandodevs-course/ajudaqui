import { AuthActionsTypes } from "../types";

export const AuthProfileType = (state, { payload }) => {
  const REDUCERS = {
    [AuthActionsTypes.PROFILE_TYPE]: {
      ...state,
      ...payload,
    },
  };
  return REDUCERS;
};
