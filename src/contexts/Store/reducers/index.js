import { ListOrderReducer } from "./listOrder";
import { CreateOrderReducer } from "./createOrder";
import { MountStoreReducer } from "./mountStore";
import { TagsReducer } from "./tags";
import { UpdateOrderReducer } from "./updateOrder";

export const StoreReducer = (state, action) => {
  const REDUCERS = {
    ...CreateOrderReducer(),
    ...ListOrderReducer(),
    ...MountStoreReducer(),
    ...TagsReducer(),
    ...UpdateOrderReducer(),
  };

  return REDUCERS[action.type](state, action);
};
