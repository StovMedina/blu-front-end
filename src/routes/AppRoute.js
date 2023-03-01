import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ShopRoutes } from "./ShopRoutes";
import { SignUpLogInRoute } from "./SignUpLogInRoute";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<ShopRoutes />} /> */}
        <Route path="*" element={<SignUpLogInRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
