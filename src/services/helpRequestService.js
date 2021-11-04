import { fetch, save, update } from './firebase/handlers';

const basePath = process.env.REACT_APP_FB_BASE_PATH;

export const fetchHelpRequests = async () => {
  const response = await fetch(`${basePath}/helpRequests`);

  return response;
};

export const createHelpRequest = async (order) => {
  const response = await save(`${basePath}/helpRequests`, order);

  return response;
};

export const singHelpRequest = async (helpRequestId, order) => {
  const response = await update(
    `${basePath}/helpRequests`,
    helpRequestId,
    {
      ...order,
    },
  );

  return response;
};
