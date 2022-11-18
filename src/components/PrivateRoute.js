import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
export const PrivateRoute = () => {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return null; //might add screen loading here when opening the web
  }

  return currentUser ? <Outlet /> : <Navigate to="/welcome" />;
};
