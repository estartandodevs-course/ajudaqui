import { OrderActionsTypes } from "../types";

export const CreateOrderReducer = () => {
  const REDUCERS = {
    [OrderActionsTypes.CREATE_ORDER_START]: (state) => {
      return {
        ...state,
        loadingStore: true,
      };
    },
    [OrderActionsTypes.CREATE_ORDER_SUCESS]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        loadingStore: false,
      };
    },
    [OrderActionsTypes.CREATE_ORDER_ERROR]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        loadingStore: false,
      };
    },
  };

  return REDUCERS;
};
