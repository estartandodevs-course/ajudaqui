import { MountStoreActionsTypes } from "../types/MountStoreActionsTypes";

export const MountStoreReducer = () => {
  const REDUCERS = {
    [MountStoreActionsTypes.MOUNT_STORE_START]: (state) => (
      {
        ...state,
        loadingStore: true,
      }
    ),
    [MountStoreActionsTypes.MOUNT_STORE_SUCESS]: (state, { payload }) => (
      {
        ...state,
        ...payload,
        loadingStore: false,
      }
    ),
    [MountStoreActionsTypes.MOUNT_STORE_ERROR]: (state, { payload }) => (
      {
        ...state,
        ...payload,
        loadingStore: false,
      }
    ),
  };

  return REDUCERS;
};
