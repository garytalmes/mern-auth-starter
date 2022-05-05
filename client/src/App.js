import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./utils/UserContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
