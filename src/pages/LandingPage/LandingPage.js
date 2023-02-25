import React, { useEffect, useState } from "react";
import BluCard from "../../components/Cards/PrimaryCard/BluCard";
import "./LandingPage.scss";
import { nanoid } from "nanoid";
import axios from "axios";

const LandingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://9b76-2806-108e-13-2ed8-bf19-495e-d4cd-6642.ngrok.io/products",
        { headers: { "ngrok-skip-browser-warning": true } }
      )
      .then((res) => setData(res.data.payload));
  }, []);

  return (
    <div className="landing-container">
      <main className="landing-main__container">
        {data.length < 1 ? (
          <div>cargando...</div>
        ) : (
          data.map((product, index) => (
            <BluCard
              id={product._id}
              key={index}
              variant="top"
              src={product.image}
              cardTitle={product.name}
              cardText={product.description}
            ></BluCard>
          ))
        )}
      </main>
      <aside></aside>
    </div>
  );
};

export default LandingPage;
