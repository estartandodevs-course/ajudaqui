import { orderStatusId } from "../../../utils/constants";

export const orderModels = {
  createdAt: new Date().toISOString(),
  order: null,
  status: orderStatusId.WAITING,
  startTime: null,
  endTime: null,
  elderly: {
    id: null,
    evaluation: 0,
    note: "",
  },
  voluntary: {
    id: null,
    evaluation: 0,
    note: "",
  },
};

export const initialStateStoreReducer = {
  helpRequests: [],
  error: null,
  loadingStore: false,
};

export const storeContextModel = {
  dispatch: () => {},
  state: initialStateStoreReducer,
};
