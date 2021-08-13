import { useContext } from "react";
import { AuthContext } from "..";
import { loginWithGoogle } from "../../../services";
import { AuthActionsTypes } from "../types";

export const useAuthGoogle = () => {
  const { dispatch } = useContext(AuthContext);

  const loginGoogle = async (profileType) => {
    dispatch({
      type: AuthActionsTypes.LOGIN_GOOGLE_START,
    });
    try {
      const { user } = await loginWithGoogle(profileType);
      dispatch({
        type: AuthActionsTypes.LOGIN_GOOGLE_SUCCESS,
        payload: {
          user,
        },
      });
    } catch (error) {
      dispatch({
        type: AuthActionsTypes.LOGIN_GOOGLE_ERROR,
        payload: {
          error,
        },
      });
    }
  };
  const logoutGoogle = () => {};

  return { loginGoogle, logoutGoogle };
};
