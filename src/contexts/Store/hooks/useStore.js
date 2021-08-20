import { useContext } from "react";
import { StoreContext } from "../index";
import { useOrderList } from "./useOrderList";
import { useCreateOrder } from "./useCreateOrder";
import { useUpdateOrder } from "./useUpdateOrder";
import { MountStoreActionsTypes } from "../types";
import { fetchElderlys } from "../../../services/elderlyService";
import { fetchVoluntarys } from "../../../services/voluntaryService";
import { fetchTags } from "../../../services/tagsService";
import { fetchHelpRequests } from "../../../services/helpRequestService";
import { useTag } from "./useTag";

export const useStore = () => {
  const { state, dispatch } = useContext(StoreContext);
  const handleMount = async () => {
    dispatch({
      type: MountStoreActionsTypes.MOUNT_STORE_START,

    });
    try {
      const response = await Promise.all([
        fetchElderlys(), fetchVoluntarys(), fetchTags(), fetchHelpRequests(),
      ]);

      const payload = {
        elderlys: response[0],
        voluntarys: response[1],
        tags: response[2],
        helpRequests: response[3],
      };

      dispatch({
        type: MountStoreActionsTypes.MOUNT_STORE_SUCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: MountStoreActionsTypes.MOUNT_STORE_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return {
    ...state,
    ...useOrderList(),
    ...useCreateOrder(),
    ...useUpdateOrder(),
    ...useTag(),
    handleMount,
  };
};
