import { createContext, useReducer } from "react";
import { StoreReducer } from "./reducers";
import { initialStateStoreReducer, storeContextModel } from "./models";

const StoreContext = createContext(storeContextModel);
const { Provider } = StoreContext;

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialStateStoreReducer);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StoreProvider, StoreContext };
