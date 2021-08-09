import { useContext } from "react";
import { AuthContext } from "..";

export const useAuth = () => {
  return { ...useContext(AuthContext) };
};
