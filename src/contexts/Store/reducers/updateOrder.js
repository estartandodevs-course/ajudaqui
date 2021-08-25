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
    [OrderActionsTypes.CANCEL_ORDER_START]: (state) => (
      {
        ...state,
        loadingStore: true,
      }
    ),
    [OrderActionsTypes.CANCEL_ORDER_SUCESS]: (state, { payload }) => (
      {
        ...state,
        ...payload,
        loadingStore: false,
      }
    ),
    [OrderActionsTypes.CANCEL_ORDER_ERROR]: (state, { payload }) => (
      {
        ...state,
        ...payload,
        loadingStore: false,
      }
    ),
    [OrderActionsTypes.SET_EVALUATION_ORDER_START]: (state) => (
      {
        ...state,
        loadingStore: true,
      }
    ),
    [OrderActionsTypes.SET_EVALUATION_ORDER_SUCESS]: (state, { payload }) => (
      {
        ...state,
        ...payload,
        loadingStore: false,
      }
    ),
    [OrderActionsTypes.SET_EVALUATION_ORDER_ERROR]: (state, { payload }) => (
      {
        ...state,
        ...payload,
        loadingStore: false,
      }
    ),
  };

  return REDUCERS;
};
