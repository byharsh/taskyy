import { API_BASE_URL } from "../../../utils/services";

export const getProjects = async () => {
  const response = await fetch(API_BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const todos = await response.json();

  const projectsMap = new Map();

  todos.forEach((todo) => {
    if (!projectsMap.has(todo.project_id)) {
      projectsMap.set(todo.project_id, {
        id: todo.project_id,
        name: todo.project_name,
      });
    }
  });

  return Array.from(projectsMap.values());
};
