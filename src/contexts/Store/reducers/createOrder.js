import { OrderActionsTypes } from '../types';

export const CreateOrderReducer = () => {
  const REDUCERS = {
    [OrderActionsTypes.CREATE_ORDER_START]: (state) => ({
      ...state,
      loadingStore: true,
    }),
    [OrderActionsTypes.CREATE_ORDER_SUCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      loadingStore: false,
    }),
    [OrderActionsTypes.CREATE_ORDER_ERROR]: (state, { payload }) => ({
      ...state,
      ...payload,
      loadingStore: false,
    }),
  };

  return REDUCERS;
};
