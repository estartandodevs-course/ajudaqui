import { createContext, useReducer } from "react";
import { authContextModel, initialStateAuthReducer } from "./models";
import { AuthReducer } from "./reducers";

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
