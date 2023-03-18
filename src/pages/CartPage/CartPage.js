import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BluButton from "../../components/Button/BluButton";
import CartCard from "../../components/Cards/CartCard/CartCard";

const CartPage = () => {
  const [data, setData] = useState([]);

  const [cart, setCart] = useState([]);

  const [deleteProduct, setDeleteProduct] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    const cartToJson = JSON.parse(cartStorage);
    setCart(cartToJson);
    const idForCheckOut = { id: cartToJson };
    axios
      .get(`https://api.aanexo.com/products/cart/id=${idForCheckOut.id}`)
      .then((res) => setData(res.data.payload));
  }, [deleteProduct]);

  const handleDelete = (id) => {
    console.log(id);
    const newCart = cart.filter((productId) => productId != id);
    const cartString = JSON.stringify(newCart);
    console.log(newCart);
    localStorage.setItem("cart", cartString);
    setDeleteProduct(!deleteProduct);
  };

  return cart.length === 0 ? (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center">Aún no hay elementos en el carrito</h1>
      <BluButton
        extraClass="mt-4 goback-button"
        text="volver a la página"
        actionOnClick={() => navigate("/blu")}
      />
    </div>
  ) : (
    <div className="container d-flex justify-content-between">
      <main className="container ">
        <div className="cart-header d-flex justify-content-between">
          <h2>Carrito de compras</h2>
          <h2>
            <span>{data.length}</span> productos
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
                      actionOnClick={() => handleDelete(product._id)}
                      extraClass="cart-dismiss mt-3"
                      text="eliminar"
                    />
                  </CartCard>
                </div>
              ))
            )}
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
          <div className="d-flex">
            <BluButton
              extraClass="cancel-button"
              text="Cancelar"
              actionOnClick={() => navigate("/blu/")}
            />
            <BluButton extraClass="checkout-button" text="pasar a pagar" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CartPage;
