import { useContext } from "react";
import { AuthContext } from "..";
import { useAuthGoogle } from "./useAuthGoogle";

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  return {
    ...state,
    dispatch,
    ...useAuthGoogle(),
  };
};
