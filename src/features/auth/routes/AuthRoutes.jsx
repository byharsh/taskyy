import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export const AuthRoutes = ({ children, requireAuth }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated && !requireAuth) {
    <Navigate to="/" replace />;
  }

  if (!isAuthenticated && requireAuth) {
    <Navigate to="/login" replace />;
  }

  return children;
};
