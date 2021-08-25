import { useContext } from "react";
import { StoreContext } from "..";
import { singHelpRequest } from "../../../services/helpRequestService";
import { orderStatusId } from "../../../utils/constants";
import { OrderActionsTypes } from "../types";

export const useCancelOrder = () => {
  const { dispatch, state } = useContext(StoreContext);

  const handleCancelOrder = async (helpRequestId) => {
    dispatch({
      type: OrderActionsTypes.CANCEL_ORDER_START,
    });

    try {
      const updatedHelpRequest = await singHelpRequest(
        helpRequestId,
        {
          status: orderStatusId.CANCELED,
        },
      );
      dispatch({
        type: OrderActionsTypes.CANCEL_ORDER_SUCESS,
        payload: {
          helpRequests: state.helpRequests.map((currentHelpRequest) => (
            currentHelpRequest.id === updatedHelpRequest?.id ? (
              updatedHelpRequest
            ) : currentHelpRequest
          )),
        },
      });
    } catch (error) {
      dispatch({
        type: OrderActionsTypes.CANCEL_ORDER_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return { handleCancelOrder };
};
