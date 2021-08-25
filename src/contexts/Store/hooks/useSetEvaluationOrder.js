import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "..";
import { singHelpRequest } from "../../../services/helpRequestService";
import { orderStatusId } from "../../../utils/constants";
import { OrderActionsTypes } from "../types";

export const useSetEvaluationOrder = () => {
  const { dispatch, state, notify } = useContext(StoreContext);
  const { push } = useHistory();

  const handleEvaluationElderly = async (helpRequestId, evaluation) => {
    dispatch({
      type: OrderActionsTypes.SET_EVALUATION_ORDER_START,
    });

    try {
      const updatedHelpRequest = await singHelpRequest(
        helpRequestId,
        {
          status: orderStatusId.CONCLUDED,
          elderly: {
            ...evaluation,
          },
        },
      );
      dispatch({
        type: OrderActionsTypes.SET_EVALUATION_ORDER_SUCESS,
        payload: {
          helpRequests: state.helpRequests.map((currentHelpRequest) => (
            currentHelpRequest.id === updatedHelpRequest?.id ? (
              updatedHelpRequest
            ) : currentHelpRequest
          )),
        },
      });
      notify("Avaliaçao registrada com sucesso.");
      push("/");
    } catch (error) {
      dispatch({
        type: OrderActionsTypes.SET_EVALUATION_ORDER_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  const handleEvaluationVoluntary = async (helpRequestId, evaluation) => {
    dispatch({
      type: OrderActionsTypes.SET_EVALUATION_ORDER_START,
    });

    try {
      const updatedHelpRequest = await singHelpRequest(
        helpRequestId,
        {
          status: orderStatusId.CONCLUDED,
          voluntary: {
            ...evaluation,
          },
        },
      );
      dispatch({
        type: OrderActionsTypes.SET_EVALUATION_ORDER_SUCESS,
        payload: {
          helpRequests: state.helpRequests.map((currentHelpRequest) => (
            currentHelpRequest.id === updatedHelpRequest?.id ? (
              updatedHelpRequest
            ) : currentHelpRequest
          )),
        },
      });
      notify("Avaliaçao registrada com sucesso.");
      push("/");
    } catch (error) {
      dispatch({
        type: OrderActionsTypes.SET_EVALUATION_ORDER_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return { handleEvaluationElderly, handleEvaluationVoluntary };
};
