import { ListOrderReducer } from './listOrder';
import { CreateOrderReducer } from './createOrder';
import { MountStoreReducer } from './mountStore';
import { TagsReducer } from './tags';
import { UpdateOrderReducer } from './updateOrder';
import { AttendanceStoreReducer } from './attendance';

export const StoreReducer = (state, action) => {
  const REDUCERS = {
    ...CreateOrderReducer(),
    ...ListOrderReducer(),
    ...MountStoreReducer(),
    ...TagsReducer(),
    ...UpdateOrderReducer(),
    ...AttendanceStoreReducer(),
  };

  return REDUCERS[action.type](state, action);
};
