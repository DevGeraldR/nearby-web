import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const AuthenticatedRoute = () => {
  const { currentUser, authenticating } = useAuth();

  if (authenticating) {
    return <h1>Loading...</h1>;
  }

  return currentUser ? <Navigate to="/applyAdmin" /> : <Outlet />;
};
