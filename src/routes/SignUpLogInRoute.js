import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "../pages/Login/LogIn";

export const SignUpLogInRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
};
