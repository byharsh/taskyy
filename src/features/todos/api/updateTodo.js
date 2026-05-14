export const updateTodo = async (id, updatedFields) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields),
  });
  if (!response.ok) {
    throw new Error("Failed to update todo");
  }
  const data = await response.json();

  return data;
};
