import { BrowserRouter, Routes,Route } from "react-router-dom";
import { ShopRoutes } from "./ShopRoutes";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<ShopRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
