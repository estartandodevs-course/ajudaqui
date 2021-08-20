import { ListOrderReducer } from "./listOrder";
import { CreateOrderReducer } from "./createOrder";
import { MountStoreReducer } from "./mountStore";
import { TagsReducer } from "./tags";

export const StoreReducer = (state, action) => {
  const REDUCERS = {
    ...CreateOrderReducer(),
    ...ListOrderReducer(),
    ...MountStoreReducer(),
    ...TagsReducer(),
  };

  return REDUCERS[action.type](state, action);
};
