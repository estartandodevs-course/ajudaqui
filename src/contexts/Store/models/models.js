import { orderStatusId } from "../../../utils/constants";

export const orderModels = {
  order: null,
  status: orderStatusId.WAITING,
  startTime: null,
  endTime: null,
  elderly: {
    id: null,
    evaluation: null,
    note: "",
  },
  voluntary: {
    id: null,
    evaluation: null,
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
