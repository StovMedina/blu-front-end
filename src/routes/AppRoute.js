import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopRoutes } from "./ShopRoutes";
import { SignUpLogInRoute } from "./SignUpLogInRoute";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Admin from "../pages/Admin/Admin";
import { PublicRoutes } from "./PublicRoutes";

export const AppRoute = () => {
  const [userRol, setUserRol] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const decode = jwtDecode(token);
      if (decode.isAdmin === true) {
        setUserRol("admin");
      } else {
        setUserRol("client");
      }
    }
  }, [userRol]);

  return (
    <BrowserRouter>
      <Routes>
        {userRol === "admin" ? (
          <Route path="/admin" element={<Admin />} />
        ) : (
          <Route path="/shop/*" element={<ShopRoutes />} />
        )}
        <Route path="/auth/*" element={<SignUpLogInRoute />} />
        <Route path="/blu/*" element={<PublicRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
