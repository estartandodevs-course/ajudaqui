import { useContext } from "react";
import { createTag } from "../../../services/tagsService";
import { StoreContext } from "../index";
import { TagActionsTypes } from "../types";

export const useTag = () => {
  const { dispatch, state } = useContext(StoreContext);

  const handleCreateTag = async (body, callback) => {
    dispatch({
      type: TagActionsTypes.CREATE_TAG_START,
    });

    try {
      const payload = await createTag(body);
      dispatch({
        type: TagActionsTypes.CREATE_TAG_SUCESS,
        payload: {
          tags: [
            ...state.tags,
            { ...payload },
          ],
        },
      });
      await callback(payload);
    } catch (error) {
      dispatch({
        type: TagActionsTypes.CREATE_TAG_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return { handleCreateTag };
};
