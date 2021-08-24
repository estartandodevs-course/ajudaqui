import { useContext } from "react";
import { AuthContext } from "..";
import { useAuthEmail } from "./useAuthEmail";
import { useAuthGoogle } from "./useAuthGoogle";
import { useUpdateProfile } from "./useUpdateProfile";

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  return {
    ...state,
    dispatch,
    ...useAuthGoogle(),
    ...useAuthEmail(),
    ...useUpdateProfile(),
  };
};
