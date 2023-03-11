import React from "react";
import Footer from "../Footer/Footer";
import NavBarMenu from "../GeneralMenu/NavBarMenu";

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
