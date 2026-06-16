import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export const AuthRoutes = ({ children, requireAuth }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated && !requireAuth) {
    return <Navigate to="/" replace />;
  }

  if (!isAuthenticated && requireAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
