import React from "react";
import { Routes, Route } from "react-router-dom";
import { ShopLayout } from "../components/layouts";
import CartPage from "../pages/CartPage/CartPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import Product from "../pages/product/Product";

export const ShopRoutes = () => {
  return (
    <ShopLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </ShopLayout>
  );
};
