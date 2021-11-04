import { createContext, useEffect, useReducer } from 'react';
import { useStorage } from '../../utils/hooks/useStorage';
import { authContextModel, initialStateAuthReducer } from './models';
import { AuthReducer } from './reducers';

const AuthContext = createContext(authContextModel);

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const { setStorageData, getStorageData } = useStorage();

  const [state, dispatch] = useReducer(AuthReducer, getStorageData(initialStateAuthReducer));

  useEffect(() => {
    setStorageData(state);
  }, [state]);

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
