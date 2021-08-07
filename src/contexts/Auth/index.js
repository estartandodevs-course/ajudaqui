import { createContext, useState } from "react";
import { authContextModel } from "./constants";

const AuthContext = createContext(authContextModel);

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [profileType, setProfileType] = useState("");

  return (
    <Provider
      value={{
        profileType,
        setProfileType,
      }}
    >
      {children}
    </Provider>
  );
};


export { AuthProvider, AuthContext };
