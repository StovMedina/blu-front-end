import React from "react";
import VerticalSideBar from "../../components/GeneralMenu/VerticalSideBar";

const Admin = () => {
  const sideBarOptions = [
    {
      key: 1,
      eventKey: "products",
      disable: false,
      text: "Productos",
    },
    {
      key: 2,
      eventKey: "customers",
      disable: false,
      text: "Clientes",
    },
    {
      key: 3,
      eventKey: "orders",
      disable: false,
      text: "Ordenes",
    },
  ];

  return (
    <div>
      <VerticalSideBar options={sideBarOptions} activeKey="/products" />
    </div>
  );
};

export default Admin;
