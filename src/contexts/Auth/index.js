import { createContext, useState } from "react";
import { authContextModel } from "./constants";

const AuthContext = createContext(authContextModel);

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [profileType, setProfileType] = useState("voluntary");

  const [user, setUser] = useState({});

  const [authIsLoading, setAuthIsLoading] = useState(false);

  return (
    <Provider
      value={{
        profileType,
        setProfileType,
        user,
        setUser,
        authIsLoading,
        setAuthIsLoading,
      }}
    >
      {children}
    </Provider>
  );
};


export { AuthProvider, AuthContext };
