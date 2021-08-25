import toast, { Toaster } from "react-hot-toast";
import { createContext, useEffect, useReducer } from "react";
import { StoreReducer } from "./reducers";
import { initialStateStoreReducer, storeContextModel } from "./models";
import { useStorage } from "../../utils/hooks/useStorage";

const StoreContext = createContext(storeContextModel);
const { Provider } = StoreContext;


const StoreProvider = ({ children }) => {
  const { setStorageData, getStorageData } = useStorage();

  const [state, dispatch] = useReducer(StoreReducer, getStorageData(initialStateStoreReducer));

  useEffect(() => {
    setStorageData(state);
  }, [state]);

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
