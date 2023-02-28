import React, { useEffect, useState } from "react";
import BluCard from "../../components/Cards/PrimaryCard/BluCard";
import "./LandingPage.scss";
import axios from "axios";
import BluButton from "../../components/Button/BluButton";
import BluCartButton from "../../components/Button/BluCartButton";
import { useNavigate } from "react-router-dom";
import apiURL from "../../config";

const LandingPage = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiURL}/products`).then((res) => setData(res.data.payload));
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleCart = (id) => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      if (cart.includes(id)) return;
      cart.push(id);
    } else {
      cart = [];
      if (cart.includes(id)) return;
      cart.push(id);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="landing-container">
      <main className="landing-main__container container-fluid">
        <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
          {data.length < 1 ? (
            <div>cargando...</div>
          ) : (
            data.map((product, index) => (
              <div className="col" key={index}>
                <BluCard
                  actionOnClick={() => handleClick(product._id)}
                  extraClass="p-1"
                  id={product._id}
                  variant="top"
                  src={product.image}
                  cardTitle={product.name}
                  cardText={product.description}
                  children={[<BluButton key={product._id} text="Comprar" />]}
                ></BluCard>
                <BluCartButton
                  actionOnClick={() => handleCart(product._id)}
                ></BluCartButton>
              </div>
            ))
          )}
        </div>
      </main>
      <aside></aside>
    </div>
  );
};

export default LandingPage;
