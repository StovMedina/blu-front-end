import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import AdminTable from "../../components/TableProducts/AdminTable";
import ProductsAdmin from "../../components/TableProducts/ProductsAdmin";

const Admin = () => {
  const [urlParamName, setUrlParamName] = useState("");
  const [showComponent, setShowComponent] = useState("");

  useEffect(() => {
    setShowComponent(urlParamName);
  }, [urlParamName]);

  const handleClick = (key) => {
    const url = new URL(window.location);
    url.searchParams.set("link", key);
    window.history.pushState({}, "", url);
    let params = new URLSearchParams(document.location.search);
    let name = params.get("link");
    setUrlParamName(name);
  };
  const sideBarOptions = [
    {
      key: 1,
      eventKey: "products",
      disable: false,
      text: "Productos",
    },
    {
      key: 2,
      eventKey: "users",
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
    <div className="d-flex">
      <aside>
        <Nav
          defaultActiveKey={`/${sideBarOptions[0].eventKey}`}
          className="flex-column"
        >
          {sideBarOptions.map((option) => (
            <Nav.Link
              key={option.key}
              eventKey={option.eventKey}
              disabled={option.disabled}
              onClick={() => handleClick(option.eventKey)}
            >
              {option.text}
            </Nav.Link>
          ))}
        </Nav>
      </aside>
      <main>
        <ProductsAdmin
          extraClass={showComponent === "products" ? "d-block" : "d-none"}
        />
        <AdminTable
          extraClass={showComponent === "users" ? "d-block" : "d-none"}
        />
      </main>
    </div>
  );
};

export default Admin;
