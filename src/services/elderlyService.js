import { fetch } from "./firebase/handlers";

const basePath = "#21/ajudaqui";

export const fetchElderlys = async () => {
  const response = await fetch(`${basePath}/elderlys`);

  return response;
};


