import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "..";
import { singHelpRequest } from "../../../services/helpRequestService";
import { orderStatusId } from "../../../utils/constants";
import { OrderActionsTypes } from "../types";

export const useSetEvaluationOrder = () => {
  const { dispatch, state, notify } = useContext(StoreContext);
  const { push } = useHistory();

  const handleEvaluationElderly = async (helpRequestId, evaluation, callback) => {
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
            currentHelpRequest.id === helpRequestId ? (
              { ...currentHelpRequest, ...updatedHelpRequest }
            ) : currentHelpRequest
          )),
        },
      });
      notify("Avaliaçao registrada com sucesso.");
      callback();
    } catch (error) {
      notify("Ocorreu um erro no registro da avaliação.", "error");

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
              { ...currentHelpRequest, ...updatedHelpRequest }
            ) : currentHelpRequest
          )),
        },
      });
      notify("Avaliaçao registrada com sucesso.");
      push("/");
    } catch (error) {
      notify("Não foi possível realizar sua solicitação.", "error");
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
