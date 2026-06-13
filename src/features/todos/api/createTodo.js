import { v4 as uuidv4 } from "uuid";
import { API_BASE_URL } from "../../../utils/services";
import { removeLocalTodo } from "../../sidebar-projects/api/localProject";

export const handleCreateTodo = async (todo) => {
  const newTodo = {
    task_id: uuidv4(),
    title: todo.title ?? todo.task_title,
    description: todo.description,
    completed: false,
    created_at: new Date().toISOString(),
    completed_at: null,
    project_id: todo.projectId,
    project_name: todo.projectName ?? todo.project_name,
  };

  await createTodo(newTodo);

  removeLocalTodo(todo.projectId);
};

export const createTodo = async (newTodo) => {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  const data = await response.json();

  return data;
};
