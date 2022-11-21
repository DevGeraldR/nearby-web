import React from "react";
import Signin from "./components/authentication/Signin";
import Signup from "./components/authentication/Signup";
import Welcome from "./components/welcome/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import { AdminRoute } from "./components/route_security/AdminRoute";
import { AuthenticatedRoute } from "./components/route_security/AuthenticatedRoute";
import { RegistrationRoute } from "./components/route_security/RegistrationRoute";
import Dashboard from "./components/admin_dashboard/layout/Dashboard";
import AddPlace from "./components/admin_dashboard/AddPlace";
import EditPlace from "./components/admin_dashboard/EditPlace";
import ApplyAdmin from "./components/registration/ApplyAdmin";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<AuthenticatedRoute />}>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<RegistrationRoute />}>
            <Route path="/applyAdmin" element={<ApplyAdmin />} />
          </Route>
          <Route element={<AdminRoute />}>
            <Route exact path="/" element={<Dashboard />}>
              <Route index element={<AddPlace />} />
              <Route path="/editPlace" element={<EditPlace />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
