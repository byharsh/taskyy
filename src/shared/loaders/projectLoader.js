import { getTodos } from "../../features/todos/api/getTodo";

export const projectTodoLoader = async ({ params, request }) => {
  const { projectId } = params;
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") || 1);

  const search = url.searchParams.get("search") || "";

  const limit = 10;
  const offset = (page - 1) * limit;

  const todos = await getTodos(projectId, limit, offset, search);

  console.log("yoyo its pojectLoader bitches");
  return { projectId, todos };
};

//This function used for checking if this loader should be running or not based on page. This only runs on initial load and when projectid changes.

// export const shouldRevalidateProjectLoader =
// ({ currentParams, nextParams }) =>
//   {
//   return currentParams.projectId !== nextParams.projectId;
// };
