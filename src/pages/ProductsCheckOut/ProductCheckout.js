import React, { useEffect, useState } from "react";
import RadioButton from "../../components/Button/RadioButton";
import Form from "react-bootstrap/Form";
import BluButton from "../../components/Button/BluButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiURL from "../../config";
import CartCard from "../../components/Cards/CartCard/CartCard";
import jwtDecode from "jwt-decode";

const ProductCheckout = ({ data }) => {
  const navigate = useNavigate();

  const [displayCart, setDisplayCart] = useState([]);
  const [buyerId, setBuyerId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const userId = decode.userId;
    setBuyerId(userId);

    axios.get(`${apiURL}/products/cart/id=${data.cartCheck}`).then((res) => {
      setDisplayCart(res.data.payload);
    });
  }, []);
  console.log(displayCart);

  const createOrder = () => {
    const order = {
      products: displayCart.map((product) => product._id),
      total: displayCart.reduce((total, product) => total + product.price, 0),
      userId: buyerId,
      createdAt: "2022-03-02T18:00:00Z",
      status: "Canceled",
      trackingNumber: "123456798",
      shipmentMethod: "dhl",
      shipmentDate: "12/12/12",
    };
    console.log(order);
    //axios.post(`${apiURL}/user-order`, order);
  };
  createOrder();

  return (
    <main className="container">
      <h1 className="text-center mb-3">¡Ya casi es tuyo!</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          {displayCart.map((product) => (
            <div className="" key={product._id}>
              <CartCard
                image={product.image}
                name={product.name}
                size={product.size}
                price={product.price}
              />
            </div>
          ))}
        </div>
        <div className="col-12 col-md-6">
          <h3 className="text-center">Son correctos tus datos? </h3>
          <h3 className="text-center">Datos de Entrega</h3>
          <div className="d-flex flex-column">
            <span>Nombre: {data.name}</span>
            <span>
              {`Dirección: ${data.street} Número Interior: ${data.intNumber} Colonia: ${data.neighborhood} Estado: ${data.state} CP: ${data.postalCode}`}
            </span>
            <span>Teléfono: {data.phone}</span>
          </div>
          <Form>
            <RadioButton
              name="shipping"
              type="radio"
              label="Envio estandar gratis"
            />
            <RadioButton
              name="shipping"
              type="radio"
              label="Entrega premium $50"
            />
            <RadioButton
              name="shipping"
              type="radio"
              label="Entrega en punta de venta gratis"
            />
          </Form>
          <div className="col-12 d-flex align-items-center justify-content-end">
            <span onClick={() => navigate("/blu")}>Cancelar</span>
            <BluButton
              extraClass="ms-5"
              actionOnClick={() => navigate("/")}
              variant="primary"
              text="Pagar"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductCheckout;
