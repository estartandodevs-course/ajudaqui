import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '..';
import { useStorage } from '../../../utils/hooks/useStorage';
import { userDataModel } from '../models';
import { AuthActionsTypes } from '../types';
import { useAuthEmail } from './useAuthEmail';
import { useAuthGoogle } from './useAuthGoogle';
import { useUpdateProfile } from './useUpdateProfile';

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  const { removeSorageData } = useStorage();

  const navigation = useNavigate();

  const logout = async () => {
    dispatch({
      type: AuthActionsTypes.LOGOUT_EMAIL_START,
    });
    try {
      removeSorageData(state);
      dispatch({
        type: AuthActionsTypes.LOGOUT_EMAIL_SUCESS,
        payload: {
          user: userDataModel,
        },
      });
      navigation('/');
    } catch (error) {
      dispatch({
        type: AuthActionsTypes.LOGOUT_EMAIL_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return {
    ...state,
    dispatch,
    ...useAuthGoogle(),
    ...useAuthEmail(),
    ...useUpdateProfile(),
    logout,
  };
};
