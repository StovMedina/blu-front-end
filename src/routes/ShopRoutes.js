import React from "react";
import { Routes, Route } from "react-router-dom";
import { ShopLayout } from "../components/layouts";
import LandingPage from "../pages/LandingPage/LandingPage";
import Product from "../pages/product/Product";
import ShippingDetails from "../pages/ShippingDetails/ShippingDetails";
import ProductCheckout from "../pages/ProductsCheckOut/ProductCheckout";
export const ShopRoutes = () => {
  return (
    <ShopLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shippingdetails" element={<ShippingDetails/>} />
        <Route path="/productcheckout" element={<ProductCheckout/>} />
      </Routes>
    </ShopLayout>
  );
};
