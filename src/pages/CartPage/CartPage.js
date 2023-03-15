import axios from "axios";
import React, { useEffect, useState } from "react";
import BluButton from "../../components/Button/BluButton";
import CartCard from "../../components/Cards/CartCard/CartCard";

const CartPage = () => {
  const [data, setData] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    const cartToJson = JSON.parse(cartStorage);
    setCart(cartToJson);
    const idForCheckOut = { id: cartToJson };
    axios
      .get(`https://api.aanexo.com/products/cart/id=${idForCheckOut.id}`)
      .then((res) => setData(res.data.payload));
  }, []);

  const handleDelete = (e) => {
    console.log("uauaua", e.target.value);
  };

  return (
    <div className="container d-flex justify-content-between">
      <main className="container ">
        <div className="cart-header d-flex justify-content-between">
          <h2>Carrito de compras</h2>
          <h2>
            <span>3</span> productos
          </h2>
        </div>
        <div className="cards-container">
          <div>
            {data.length < 1 ? (
              <div>cargando...</div>
            ) : (
              data.map((product) => (
                <div className="" key={product._id}>
                  <CartCard
                    image={product.image}
                    name={product.name}
                    size={product.size}
                    price={product.price}
                  >
                    <BluButton
                      actionOnClick={() => handleDelete()}
                      extraClass="cart-dismiss mt-3"
                      text="eliminar"
                    />
                  </CartCard>
                </div>
              ))
            )}
            <BluButton extraClass="checkout-button" text="pasar a pagar" />
          </div>
        </div>
      </main>
      <aside className="container">
        <div className="cart-resume">
          <h2>Resumen de la compra</h2>
          Productos: {data.length}
          Detalle del pedido:
          {data.map((product) => (
            <div className="d-flex justify-content-between">
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>
          ))}
          <div>
            <h3>
              Total {data.reduce((total, product) => total + product.price, 0)}
            </h3>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CartPage;
