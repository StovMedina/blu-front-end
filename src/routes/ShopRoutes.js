import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ShopLayout } from "../components/layouts";
import ShippingDetails from "../pages/ShippingDetails/ShippingDetails";
import ProductCheckout from "../pages/ProductsCheckOut/ProductCheckout";
import Ordercomplet from "../pages/Ordercompleted/Ordercomplet";
import { useNavigate } from "react-router-dom";

export const ShopRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login");
  }, []);

  return (
    <ShopLayout>
      <Routes>
        <Route path="/shippingdetails" element={<ShippingDetails />} />
        <Route path="/productcheckout" element={<ProductCheckout />} />
        <Route path="/ordercompleted" element={<Ordercomplet />} />
      </Routes>
    </ShopLayout>
  );
};
