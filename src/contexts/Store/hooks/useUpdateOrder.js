import { useContext } from "react";
import { StoreContext } from "..";
import { singHelpRequest } from "../../../services/helpRequestService";
import { orderStatusId } from "../../../utils/constants";
import { OrderActionsTypes } from "../types";


export const useUpdateOrder = () => {
  const { dispatch } = useContext(StoreContext);

  const handleUpdateSubscribe = async (helpRequestId, voluntaryId) => {
    dispatch({
      type: OrderActionsTypes.SUBSCRIBE_ORDER_START,
    });

    try {
      const helpRequests = await singHelpRequest(
        helpRequestId,
        {
          status: orderStatusId.WAITING_VOLUNTARY,
          voluntary: {
            id: voluntaryId,
          },
        },
      );
      dispatch({
        type: OrderActionsTypes.SUBSCRIBE_ORDER_SUCESS,
        payload: {
          helpRequests,
        },
      });
    } catch (error) {
      dispatch({
        type: OrderActionsTypes.SUBSCRIBE_ORDER_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return { handleUpdateSubscribe };
};