import axios from "axios";
import React, { useEffect, useState } from "react";
import CartCard from "../../components/Cards/CartCard/CartCard";

const CartPage = () => {
  const [data, setData] = useState([]);

  const cartStorage = localStorage.getItem("cart");

  const cartToJson = JSON.parse(cartStorage);

  const cart = { id: cartToJson };

  useEffect(() => {
    console.log(cart);
    axios
      .get("https://api.aanexo.com/payment", {
        data: {
          id: ["1"],
        },
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => console.log(res));
  }, []);

  return (
    <div>
      <CartCard />
    </div>
  );
};

export default CartPage;
