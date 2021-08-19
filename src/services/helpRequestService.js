import { orderStatusId } from "../utils/constants/orderStatus";
import { fetch, save, update } from "./firebase/handlers";

const basePath = "#21/ajudaqui";

export const fetchHelpRequests = async () => {
  const response = await fetch(`${basePath}/helpRequests`);

  return response;
};

export const createHelpRequest = async (elderlyId, order) => {
  const draftOrder = {
    createdAt: new Date().toISOString(),
    order,
    status: orderStatusId.WAITING,
    startTime: null,
    endTime: null,
    elderly: {
      id: elderlyId,
      evaluation: 0,
      note: "",
    },
    voluntary: {
      id: null,
      evaluation: 0,
      note: "",
    },
  };

  const response = await save(`${basePath}/helpRequests`, draftOrder);

  return response;
};

export const singHelpRequest = async (helpRequestId, voluntaryId) => {
  const response = await update(
    `${basePath}/helpRequests`,
    helpRequestId,
    {
      voluntary: {
        id: voluntaryId,
      },
    },
  );

  return response;
};
