import { useContext } from "react";
import { StoreContext } from "..";
import { createHelpRequest } from "../../../services/helpRequestService";
import { OrderActionsTypes } from "../types";
import { orderModels } from "../models";

export const useCreateOrder = () => {
  const { dispatch } = useContext(StoreContext);

  const handleCreateOrder = async (order) => {
    dispatch({
      type: OrderActionsTypes.CREATE_ORDER_START,
    });

    const newOrder = {
      ...orderModels,
      ...order,
    };
    try {
      const helpRequests = await createHelpRequest(newOrder);
      dispatch({
        type: OrderActionsTypes.CREATE_ORDER_SUCESS,
        payload: {
          helpRequests,
        },
      });
    } catch (error) {
      dispatch({
        type: OrderActionsTypes.CREATE_ORDER_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return { handleCreateOrder };
};
