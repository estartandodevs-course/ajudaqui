import { useContext } from "react";
import { AuthContext } from "..";
import {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
} from "../../../services";
import { modelByProfile } from "../constants";
import { AuthActionsTypes } from "../types";

export const useAuthEmail = () => {
  const { dispatch } = useContext(AuthContext);

  const registerEmail = async (credentials, profileType) => {
    dispatch({
      type: AuthActionsTypes.LOGIN_EMAIL_START,
    });
    try {
      const { user } = await registerWithEmailAndPassword(
        credentials,
        profileType,
        modelByProfile[profileType],
      );
      dispatch({
        type: AuthActionsTypes.LOGIN_EMAIL_SUCESS,
        payload: {
          user,
        },
      });
    } catch (error) {
      dispatch({
        type: AuthActionsTypes.LOGIN_EMAIL_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  const loginEmail = async (credentials, profileType) => {
    dispatch({
      type: AuthActionsTypes.LOGIN_EMAIL_START,
    });
    try {
      const { user } = await loginWithEmailAndPassword(
        credentials,
        profileType,
        modelByProfile[profileType],
      );
      dispatch({
        type: AuthActionsTypes.LOGIN_EMAIL_SUCESS,
        payload: {
          user,
        },
      });
    } catch (error) {
      dispatch({
        type: AuthActionsTypes.LOGIN_EMAIL_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return { registerEmail, loginEmail };
};
