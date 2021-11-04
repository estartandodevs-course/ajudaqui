import { fetch, save } from './firebase/handlers';

const basePath = process.env.REACT_APP_FB_BASE_PATH;

export const fetchTags = async () => {
  const response = await fetch(`${basePath}/tags`);
  return response;
};

export const createTag = async (body) => {
  const response = await save(`${basePath}/tags`, body);
  return response;
};
