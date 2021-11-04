import { TagActionsTypes } from '../types';

export const TagsReducer = () => {
  const REDUCERS = {
    [TagActionsTypes.CREATE_TAG_START]: (state) => ({
      ...state,
      loadingTags: true,
    }),
    [TagActionsTypes.CREATE_TAG_SUCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      loadingTags: false,
    }),
    [TagActionsTypes.CREATE_TAG_ERROR]: (state, { payload }) => ({
      ...state,
      ...payload,
      loadingTags: false,
    }),
  };

  return REDUCERS;
};
