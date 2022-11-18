import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
export const PrivateRoute = () => {
  const { currentUser, isLoading } = useAuth();

  return isLoading ? (
    <h1>Loading...</h1>
  ) : currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/welcome" />
  );
};
