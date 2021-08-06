import { createContext, useState } from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [profileType, setProfileType] = useState({});

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
