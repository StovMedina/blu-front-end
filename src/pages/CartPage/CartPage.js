import axios from "axios";
import React, { useEffect, useState } from "react";
import BluButton from "../../components/Button/BluButton";
import CartCard from "../../components/Cards/CartCard/CartCard";

const CartPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    const cartToJson = JSON.parse(cartStorage);
    const idForCheckOut = { id: cartToJson };
    axios
      .get(`https://api.aanexo.com/products/cart/id=${idForCheckOut.id}`)
      .then((res) => setData(res.data.payload));
  }, []);

  return (
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
            />
          </div>
        ))
      )}
      <BluButton text="pasar a pagar" />
    </div>
  );
};

export default CartPage;
