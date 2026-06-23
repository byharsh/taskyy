import { API_BASE_URL } from "../../../utils/services";

export const getTodos = async (
  projectId,
  limit = 10,
  offset = 0,
  search = "",
) => {
  const response = await fetch(
    `${API_BASE_URL}?project_id=${projectId}&limit=${limit}&offset=${offset}&search?title=${search}*`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const data = await response.json();
  return data;
};
