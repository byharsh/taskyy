import { getTodos } from "../../features/todos/api/getTodo";
import { DEMO_PROJECTS } from "../../utils/PROJECTS";

export const projectTodoLoader = async ({ params }) => {
  const { projectId } = params;

  // const todosWithSameProjectId = DEMO_PROJECTS.filter((p) => p.id === projectId);
  // if (todosWithSameProjectId.length === 0) {
  //   throw new Response("Project not found", { status: 404 });
  // }

  const todos = await getTodos(projectId);
  return { todos, projectId };
  debugger;
};
