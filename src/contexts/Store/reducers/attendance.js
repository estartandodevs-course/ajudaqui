import { OrderActionsTypes } from '../types/OrderActionsTypes';

export const AttendanceStoreReducer = () => {
  const REDUCERS = {
    [OrderActionsTypes.START_ATTENDANCE_START]: (state) => (
      {
        ...state,
        loadingStore: true,
      }
    ),
    [OrderActionsTypes.START_ATTENDANCE_SUCESS]: (state, { payload }) => (
      {
        ...state,
        ...payload,
        loadingStore: false,
      }
    ),
    [OrderActionsTypes.START_ATTENDANCE_ERROR]: (state, { payload }) => (
      {
        ...state,
        ...payload,
        loadingStore: false,
      }
    ),
    [OrderActionsTypes.END_ATTENDANCE_START]: (state) => (
      {
        ...state,
        loadingStore: true,
      }
    ),
    [OrderActionsTypes.END_ATTENDANCE_SUCESS]: (state, { payload }) => (
      {
        ...state,
        ...payload,
        loadingStore: false,
      }
    ),
    [OrderActionsTypes.END_ATTENDANCE_ERROR]: (state, { payload }) => (
      {
        ...state,
        ...payload,
        loadingStore: false,
      }
    ),
  };

  return REDUCERS;
};
