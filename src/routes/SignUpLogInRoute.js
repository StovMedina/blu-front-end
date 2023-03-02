import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "../pages/Login/LogIn";
// import ShippingDetails from "../pages/ShippingDetails/ShippingDetails";

export const SignUpLogInRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      {/* <Route path="/shippingdetails" element={<ShippingDetails />} /> */}
    </Routes>
  );
};
