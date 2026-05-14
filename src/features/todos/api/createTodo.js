import { API_BASE_URL } from "../../../utils/services";

export const handleCreateTodo = (todo) => {
  const newTodo = {
    task_id: uuidv4(),
    title: todo.title,
    description: todo.description,
    completed: false,
    created_at: new Date().toISOString(),
    completed_at: null,
    project_id: todo.projectId,
    project_name: todo.projectName,
  };

  createTodo(newTodo);
};

export const createTodo = async (todo) => {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("Failed to create todo");
  }
  const data = await response.json();
  return data;
};
