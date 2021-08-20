import { fetch, save } from "./firebase/handlers";

const basePath = "#21/ajudaqui";

export const fetchTags = async () => {
  const response = await fetch(`${basePath}/tags`);
  return response;
};


export const createTag = async (body) => {
  const response = await save(`${basePath}/tags`, body);
  return response;
};
