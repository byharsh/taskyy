import { RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";

import "./index.css";

import { router } from "./Router.jsx";
import { AuthProvider } from "./features/auth/context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />,
  </AuthProvider>,
);
