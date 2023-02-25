import React, { useEffect, useState } from "react";
import BluCard from "../../components/Cards/PrimaryCard/BluCard";
import "./LandingPage.scss";
import axios from "axios";
import BluButton from "../../components/Button/BluButton";
import BluCartButton from "../../components/Button/BluCartButton";

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
      <main className="landing-main__container container-fluid">
        <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
          {data.length < 1 ? (
            <div>cargando...</div>
          ) : (
            data.map((product, index) => (
              <div className="col">
                <BluCard
                  extraClass="p-1"
                  id={product._id}
                  key={product._id}
                  variant="top"
                  src={product.image}
                  cardTitle={product.name}
                  cardText={product.description}
                  children={<BluButton text="comprame prro" />}
                ></BluCard>
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
