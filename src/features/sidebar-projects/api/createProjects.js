import { v4 as uuidv4 } from "uuid";

export const createProject = (projectName) => {
  return {
    id: uuidv4(),
    name: projectName,
  };
};
