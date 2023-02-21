import React from "react";
import BluCard from "../../components/Cards/PrimaryCard/BluCard";
import "./LandingPage.scss";
import axios from "axios";
import BluButton from "../../components/Button/BluButton";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [mp, setMp] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.async = true;
    script.onload = () => {
      setMp(window.MercadoPago);
    };
    document.body.appendChild(script);
  }, []);
  console.log(window);

  const mercadoPago = new mp();
  console.log(mercadoPago);

  // const mercadopago = new mp.MercadoPago(
  //   "TEST-e877fe73-bb6a-45e5-adb6-de90b04f0862",
  //   {
  //     locale: "es-MX", // The most common are: 'pt-BR', 'es-AR' and 'en-US'
  //   }
  // );

  // const createCheckoutButton = (preferenceId) => {
  //   // Initialize the checkout
  //   mercadopago.checkout({
  //     preference: {
  //       id: preferenceId,
  //     },
  //     render: {
  //       container: ".button-checkout", // Class name where the payment button will be displayed
  //       label: "Pay", // Change the payment button text (optional)
  //     },
  //   });
  // };

  const handleCheckOut = () => {
    const orderData = {
      quantity: 1,
      description: "macizo",
      price: 100,
    };
    const config = {
      headers: {
        // encabezado personalizado
        "Content-Type": "application/json",
      },
    };
    const data = JSON.stringify(orderData);
    axios.post("/payment", data, config);
  };

  const products = [
    {
      image:
        "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Chamarra de mezclilla con bordado",
      text: "Chamarra con un lindo bordado motivador",
    },
    {
      image:
        "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hoodie para correr",
      text: "Hoodie ligera ideal para trotar",
    },
    {
      image:
        "https://images.pexels.com/photos/3236651/pexels-photo-3236651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Pareo ligero",
      text: "Pareo ligero con estampado",
    },
    {
      image:
        "https://images.pexels.com/photos/1024036/pexels-photo-1024036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Vestido vaporoso de primavera",
      text: "Vestido con estampado floral",
    },
    {
      image:
        "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Chamarra de mezclilla con bordado",
      text: "Chamarra con un lindo bordado motivador",
    },
    {
      image:
        "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hoodie para correr",
      text: "Hoodie ligera ideal para trotar",
    },
    {
      image:
        "https://images.pexels.com/photos/3236651/pexels-photo-3236651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Pareo ligero",
      text: "Pareo ligero con estampado",
    },
    {
      image:
        "https://images.pexels.com/photos/1024036/pexels-photo-1024036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Vestido vaporoso de primavera",
      text: "Vestido con estampado floral",
    },
  ];

  return (
    <div className="landing-container">
      <main className="landing-main__container">
        {products.map((product, index) => (
          <BluCard
            key={index}
            variant="top"
            src={product.image}
            cardTitle={product.title}
            cardText={product.text}
          >
            <div className="button-checkout"></div>
          </BluCard>
        ))}
      </main>
    </div>
  );
};

export default LandingPage;
