import { API_BASE_URL } from "../../../utils/services";

export const updateTodo = async (id, updatedFields) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to update todo, error is:" ${response.status} ${response.statusText}`,
    );
  }
  const data = await response.json();

  return data;
};
