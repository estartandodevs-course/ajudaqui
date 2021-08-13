import { createContext, useReducer } from "react";
import { authContextModel, initialStateAuthReducer } from "./constants";
import { AuthReducer } from "./reducer";

const AuthContext = createContext(authContextModel);

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialStateAuthReducer);

  return (
    <Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthProvider, AuthContext };
