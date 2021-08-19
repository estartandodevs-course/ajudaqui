import { OrderActionsTypes } from "../types";

export const ListOrderReducer = () => {
  const REDUCERS = {
    [OrderActionsTypes.LIST_ORDER_START]: (state) => {
      return {
        ...state,
        loadingStore: true,
      };
    },
    [OrderActionsTypes.LIST_ORDER_SUCESS]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        loadingStore: false,
      };
    },
    [OrderActionsTypes.LIST_ORDER_ERROR]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        loadingStore: false,
      };
    },
  };

  return REDUCERS;
};
