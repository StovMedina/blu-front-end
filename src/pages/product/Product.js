import React, { useEffect, useState } from "react";
import axios from "axios";
import BluButton from "../../components/Button/BluButton";
import BluCartButton from "../../components/Button/BluCartButton";
import apiURL from "../../config";
import { useNavigate, useParams } from "react-router";

const Product = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${apiURL}/products/${id}`)
      .then((res) => setData(res.data.payload));
  }, [id]);

  const handleCheckOut = (id) => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      if (cart.includes(id)) {
        navigate("/shop/shippingdetails");
        return;
      }
      cart.push(id);
    } else {
      cart = [];
      if (cart.includes(id)) {
        navigate("/shop/shippingdetails");
        return;
      }
      cart.push(id);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/shop/shippingdetails");
  };

  return (
    <div className="container">
      <main className="product-container row">
        <div className="product-picture container col-6">
          <div className="row">
            <img
              className="col-12 g-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blackpink_PUBG_210321.jpg/800px-Blackpink_PUBG_210321.jpg"
              alt="cargando..."
            />
            <img
              className="col-6 g-2"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/blackpink-born-pink-1663323431.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
              alt="cargando..."
            />
            <img
              className="col-6 g-2"
              src="https://imgmedia.larepublica.pe/640x377/larepublica/original/2022/06/10/62a3ab0c4b9eb81b6563ae77.webp"
              alt="cargando..."
            />
          </div>
        </div>
        <div className="product-details col-6">
          <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <h2>{data.name}</h2>
            <h4>{data.price}</h4>
            <p>{data.description}</p>
            <div className="buttons-container d-flex flex-column justify-content-center align-items-center g-5">
              <BluCartButton extraClass="m-4" />
              <BluButton
                actionOnClick={() => handleCheckOut(id)}
                extraClass="m-4"
                text="Pasar a comprar"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
