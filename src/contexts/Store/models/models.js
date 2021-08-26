import { orderStatusId } from "../../../utils/constants";

export const orderModels = {
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
  tags: [],
  elderlys: [],
  voluntarys: [],
};

export const storeContextModel = {
  dispatch: () => {},
  notify: () => {},
  state: initialStateStoreReducer,
};
