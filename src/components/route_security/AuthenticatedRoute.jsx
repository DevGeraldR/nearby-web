// To secure routes of authenticated
// To make sure that the user will not enter log in and sign up page
// if there are already loged in

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const AuthenticatedRoute = () => {
  const { currentUser, authenticating } = useAuth();

  // Check if still authenticating then return loading
  if (authenticating) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center h-screen">
        <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        <span>Please wait...</span>
      </div>
    );
  }

  return currentUser ? <Navigate to="/applyAdmin" /> : <Outlet />;
};
