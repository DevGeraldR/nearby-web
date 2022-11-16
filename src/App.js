import React from "react";
import Signin from "./components/authentication/Signin";
import Signup from "./components/authentication/Signup";
import Welcome from "./components/navigator/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
