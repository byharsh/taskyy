import Layout from "./shared/layout/Layout";

import { createBrowserRouter, Navigate } from "react-router";
import NoTodoPage from "./features/todos/components/NoTodoPage";
import NotFoundPage from "./shared/error/NotFoundPage";
import TodoPage from "./features/todos/components/TodoPage";
import { projectTodoLoader } from "./shared/loaders/projectLoader";
import AuthPage from "./features/auth/pages/AuthPage";

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
  {
    path: "/login",
    element: <AuthPage mode="login" />,
  },
  {
    path: "/signup",
    element: <AuthPage mode="signup" />,
  },
  {
    path: "/auth",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/auth/login",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/auth/signup",
    element: <Navigate to="/signup" replace />,
  },
]);
