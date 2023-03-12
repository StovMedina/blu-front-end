import React from "react";
import NavBarMenu from "../GeneralMenu/NavBarMenu";
import Footer from "../Footer/Footer";

export const ShopLayout = ({ children }) => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-beetween">
      <NavBarMenu />

      <div className="flex-grow-1 d-flex flex-column justify-content-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};
