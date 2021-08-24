import { OrderActionsTypes } from "../types/OrderActionsTypes";

export const UpdateOrderReducer = () => {
  const REDUCERS = {
    [OrderActionsTypes.SUBSCRIBE_ORDER_START]: (state) => (
      {
        ...state,
        loadingStore: true,
      }
    ),
    [OrderActionsTypes.SUBSCRIBE_ORDER_SUCESS]: (state, { payload }) => (
      {
        ...state,
        ...payload,
        loadingStore: false,
      }
    ),
    [OrderActionsTypes.SUBSCRIBE_ORDER_ERROR]: (state, { payload }) => (
      {
        ...state,
        ...payload,
        loadingStore: false,
      }
    ),
  };

  return REDUCERS;
};
