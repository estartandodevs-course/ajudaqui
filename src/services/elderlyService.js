import { fetch } from "./firebase/handlers";

const basePath = process.env.REACT_APP_FB_BASE_PATH;

export const fetchElderlys = async () => {
  const response = await fetch(`${basePath}/elderlys`);

  return response;
};


