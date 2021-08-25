import { useContext } from "react";
import { StoreContext } from "..";
import { createHelpRequest } from "../../../services/helpRequestService";
import { OrderActionsTypes } from "../types";
import { orderModels } from "../models";

export const useCreateOrder = () => {
  const { state, dispatch, notify } = useContext(StoreContext);

  const handleCreateOrder = async (order, callback) => {
    dispatch({
      type: OrderActionsTypes.CREATE_ORDER_START,
    });

    const newOrder = {
      ...orderModels,
      ...order,
    };
    try {
      const helpRequest = await createHelpRequest(newOrder);
      dispatch({
        type: OrderActionsTypes.CREATE_ORDER_SUCESS,
        payload: {
          helpRequests: [...state.helpRequests, helpRequest],
        },
      });
      notify("Pedido de ajuda enviado");
      if (callback) callback(helpRequest.id);
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
