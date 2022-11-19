import React from "react";
import Signin from "./components/authentication/Signin";
import Signup from "./components/authentication/Signup";
import Welcome from "./components/welcome/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import Home from "./components/dashboard/Home";
import AddPlace from "./components/dashboard/AddPlace";
import ApplyAdmin from "./components/dashboard/ApplyAdmin";
import EditPlace from "./components/dashboard/EditPlace";

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
              <Route index element={<AddPlace />} />
              <Route path="/applyadmin" element={<ApplyAdmin />} />
              <Route path="/editPlace" element={<EditPlace />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
