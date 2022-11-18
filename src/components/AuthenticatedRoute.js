import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const AuthenticatedRoute = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to="/" /> : <Outlet />;
};
