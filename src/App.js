import React from "react";
import Signin from "./components/authentication/Signin";
import Signup from "./components/authentication/Signup";
import Welcome from "./components/welcome/Welcome";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />} />
          </Route>

          <Route path="/welcome" element={<Welcome />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
