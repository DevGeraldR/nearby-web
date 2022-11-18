import React from "react";
import Signin from "./components/authentication/Signin";
import Signup from "./components/authentication/Signup";
import Welcome from "./components/welcome/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import AddHospital from "./components/dashboard/AddHospital";
import Home from "./components/dashboard/Home";

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
          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<Home />}>
              <Route index element={<AddHospital />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
