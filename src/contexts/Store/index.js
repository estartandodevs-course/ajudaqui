import { createContext, useReducer } from "react";
import toast, { Toaster } from "react-hot-toast";
import { StoreReducer } from "./reducers";
import { initialStateStoreReducer, storeContextModel } from "./models";

const StoreContext = createContext(storeContextModel);
const { Provider } = StoreContext;

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialStateStoreReducer);
  const notify = (content, type = "success") => {
    const TYPES = {
      success: () => toast.success(content),
      error: () => toast.error(content),
    };

    return TYPES[type]();
  };

  return (
    <Provider
      value={{
        state,
        dispatch,
        notify,
      }}
    >
      <Toaster />
      {children}
    </Provider>
  );
};

export { StoreProvider, StoreContext };
