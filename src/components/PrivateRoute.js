import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const PrivateRoute = () => {
  const { currentUser, from } = useAuth();

  /**
   * from is use to fix a bug when signing in it is redirecting to welcome not to the dashboard
   * That is because even though the user already have signed in the currentUser will still a null
   * in a few call that cause to render the welcome
   * That is why i put from so if it is from sign in or logout it will automatically redirect to the
   * dashboard
   */

  return typeof currentUser === "undefined" ? (
    <h1>Loading.....</h1>
  ) : from === "signIn" || from === "signUp" ? (
    <Outlet />
  ) : currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/welcome" />
  );
};
