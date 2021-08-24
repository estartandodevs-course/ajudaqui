import { useContext } from "react";
import { AuthContext } from "..";
import { updateUserData } from "../../../services";
import { AuthActionsTypes } from "../types";

export const useUpdateProfile = () => {
  const { dispatch } = useContext(AuthContext);

  const updateProfile = async (profileType, id, profileData) => {
    dispatch({
      type: AuthActionsTypes.UPDATE_PROFILE_START,
    });
    try {
      const user = await updateUserData(profileType, id, profileData);
      dispatch({
        type: AuthActionsTypes.UPDATE_PROFILE_SUCESS,
        payload: {
          user,
        },
      });
    } catch (error) {
      dispatch({
        type: AuthActionsTypes.UPDATE_PROFILE_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return { updateProfile };
};
