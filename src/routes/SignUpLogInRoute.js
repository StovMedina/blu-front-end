import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "../pages/Login/LogIn";
import SingUpForm from "../pages/SingUp/SingUpForm";

export const SignUpLogInRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/singup" element={<SingUpForm />} />
    </Routes>
  );
};
