import { useContext } from 'react';
import { StoreContext } from '..';
import { orderStatusId } from '../../../utils/constants';
import { singHelpRequest } from '../../../services/helpRequestService';
import { OrderActionsTypes } from '../types';

export const useAttendance = () => {
  const { state, dispatch, notify } = useContext(StoreContext);

  const handleStartAttendance = async (helpRequestId) => {
    dispatch({
      type: OrderActionsTypes.START_ATTENDANCE_START,
    });

    try {
      const updatedHelpRequest = await singHelpRequest(
        helpRequestId,
        {
          status: orderStatusId.IN_PROGRESS,
          startTime: new Date().toISOString(),
        },
      );
      dispatch({
        type: OrderActionsTypes.START_ATTENDANCE_SUCESS,
        payload: {
          helpRequests: state.helpRequests.map((currentHelpRequest) => (
            currentHelpRequest?.id === helpRequestId ? (
              { ...currentHelpRequest, ...updatedHelpRequest }
            ) : currentHelpRequest
          )),
        },
      });
      notify('Tarefa iniciada com sucesso');
    } catch (error) {
      notify('Ocorreu um erro ao iniciar a tarefa', 'error');
      dispatch({
        type: OrderActionsTypes.START_ATTENDANCE_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  const handleEndAttendance = async (helpRequestId) => {
    dispatch({
      type: OrderActionsTypes.END_ATTENDANCE_START,
    });

    try {
      const updatedHelpRequest = await singHelpRequest(
        helpRequestId,
        {
          status: orderStatusId.CONCLUDED,
          endTime: new Date().toISOString(),
        },
      );
      dispatch({
        type: OrderActionsTypes.END_ATTENDANCE_SUCESS,
        payload: {
          helpRequests: state.helpRequests.map((currentHelpRequest) => (
            currentHelpRequest.id === helpRequestId ? (
              { ...currentHelpRequest, ...updatedHelpRequest }
            ) : currentHelpRequest
          )),
        },
      });
      notify('Encerrado com sucesso');
    } catch (error) {
      notify('Ocorreu um erro ao encerrar a tarefa', 'error');

      dispatch({
        type: OrderActionsTypes.END_ATTENDANCE_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return { handleStartAttendance, handleEndAttendance };
};
