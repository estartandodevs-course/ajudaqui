import { fetch } from './firebase/handlers';

const basePath = process.env.REACT_APP_FB_BASE_PATH;

export const fetchVoluntarys = async () => {
  const response = await fetch(`${basePath}/voluntarys`);
  return response;
};
