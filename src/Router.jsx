import Layout from "./shared/layout/Layout";

import { createRoot } from "react-dom/client";

import { createBrowserRouter } from "react-router";
import NoTodoPage from "./features/todos/components/NoTodoPage";
import TodoList from "./features/todos/components/TodoList";
import NotFoundPage from "./shared/error/NotFoundPage";
import TodoPage from "./features/todos/components/TodoPage";
import { projectTodoLoader } from "./shared/loaders/projectLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <NoTodoPage />,
      },
      {
        path: "projects/:projectId",
        element: <TodoPage />,
        loader: projectTodoLoader,
        hydrateFallbackElement: <NoTodoPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
