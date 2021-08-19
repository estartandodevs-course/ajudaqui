import { useContext } from "react";
import { StoreContext } from "..";
import { fetchHelpRequests } from "../../../services/helpRequestService";
import { OrderActionsTypes } from "../types";

export const useOrderList = () => {
  const { dispatch } = useContext(StoreContext);

  const handleOrderList = async () => {
    dispatch({
      type: OrderActionsTypes.LIST_ORDER_START,
    });

    try {
      const helpRequests = await fetchHelpRequests();
      dispatch({
        type: OrderActionsTypes.LIST_ORDER_SUCESS,
        payload: {
          helpRequests,
        },
      });
    } catch (error) {
      dispatch({
        type: OrderActionsTypes.LIST_ORDER_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return { handleOrderList };
};
