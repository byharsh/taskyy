import { API_BASE_URL } from "../../../utils/services";

export const getTodos = async (projectId) => {
  const response = await fetch(`${API_BASE_URL}?project_id=${projectId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const data = await response.json();
  return data;
};
