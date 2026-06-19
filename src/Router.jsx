import Layout from "./shared/layout/Layout";

import { createBrowserRouter, Navigate } from "react-router";
import NoTodoPage from "./features/todos/components/NoTodoPage";
import NotFoundPage from "./shared/error/NotFoundPage";
import TodoPage from "./features/todos/components/TodoPage";
import { projectTodoLoader } from "./shared/loaders/projectLoader";

import AuthPage from "./features/auth/pages/AuthPage";
import { AuthRoutes } from "./features/auth/routes/AuthRoutes";
import PlayGround from "./shared/components/PlayGround";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoutes requireAuth={false}>
        <Layout />
      </AuthRoutes>
    ),
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
    element: (
      <AuthRoutes requireAuth={false}>
        <AuthPage mode="login" />
      </AuthRoutes>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthRoutes requireAuth={false}>
        <AuthPage mode="signup" />
      </AuthRoutes>
    ),
  },
  {
    path: "/playground",
    element: <PlayGround />,
  },
]);
