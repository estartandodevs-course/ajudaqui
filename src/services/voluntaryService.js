import { fetch } from "./firebase/handlers";

const basePath = "#21/ajudaqui";

export const fetchVoluntarys = async () => {
  const response = await fetch(`${basePath}/voluntarys`);

  return response;
};


