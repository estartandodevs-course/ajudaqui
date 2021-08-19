import { ListOrderReducer } from "./listOrder";
import { CreateOrderReducer } from "./createOrder";

export const StoreReducer = (state, action) => {
  const REDUCERS = {
    ...CreateOrderReducer(),
    ...ListOrderReducer(),
  };

  return REDUCERS[action.type](state, action);
};
