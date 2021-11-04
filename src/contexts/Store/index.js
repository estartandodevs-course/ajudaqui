import toast, { Toaster } from 'react-hot-toast';
import { createContext, useEffect, useReducer } from 'react';
import { StoreReducer } from './reducers';
import { initialStateStoreReducer, storeContextModel } from './models';
import { useStorage } from '../../utils/hooks/useStorage';
import { MountStoreActionsTypes } from './types';
import { fetchElderlys } from '../../services/elderlyService';
import { fetchVoluntarys } from '../../services/voluntaryService';
import { fetchTags } from '../../services/tagsService';
import { fetchHelpRequests } from '../../services';

const StoreContext = createContext(storeContextModel);
const { Provider } = StoreContext;

const StoreProvider = ({ children }) => {
  const { setStorageData, getStorageData } = useStorage();

  const [state, dispatch] = useReducer(StoreReducer, getStorageData(initialStateStoreReducer));

  const handleMount = async () => {
    dispatch({
      type: MountStoreActionsTypes.MOUNT_STORE_START,

    });
    try {
      const response = await Promise.all([
        fetchElderlys(), fetchVoluntarys(), fetchTags(), fetchHelpRequests(),
      ]);

      const payload = {
        elderlys: response[0],
        voluntarys: response[1],
        tags: response[2],
        helpRequests: response[3],
      };

      dispatch({
        type: MountStoreActionsTypes.MOUNT_STORE_SUCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: MountStoreActionsTypes.MOUNT_STORE_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  useEffect(() => {
    setStorageData(state);
  }, [state]);

  useEffect(() => {
    (async () => {
      handleMount();
    })();
  }, []);

  const notify = (content, type = 'success') => {
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
        handleMount,
      }}
    >
      <Toaster />
      {children}
    </Provider>
  );
};

export { StoreProvider, StoreContext };
