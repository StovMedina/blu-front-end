import React from "react";
import { Routes, Route } from "react-router-dom";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};
