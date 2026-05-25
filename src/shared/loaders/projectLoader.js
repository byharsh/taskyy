import { getTodos } from "../../features/todos/api/getTodo";


export const projectTodoLoader = async ({ params }) => {
  const { projectId } = params;
  const todos = await getTodos(projectId);
  return { id: projectId, todos };
};
