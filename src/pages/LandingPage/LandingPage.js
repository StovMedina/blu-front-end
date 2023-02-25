import React, { useEffect, useState } from "react";
import BluCard from "../../components/Cards/PrimaryCard/BluCard";
import "./LandingPage.scss";
import { nanoid } from "nanoid";
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
        <div className="row">
          {data.length < 1 ? (
            <div>cargando...</div>
          ) : (
            data.map((product, index) => (
              <BluCard
                className="col-12 col-md-6"
                id={product._id}
                key={index}
                variant="top"
                src={product.image}
                cardTitle={product.name}
                cardText={product.description}
                children={[
                  <BluButton text="comprame prro" />,
                  <BluCartButton />,
                ]}
              ></BluCard>
            ))
          )}
        </div>
      </main>
      <aside></aside>
    </div>
  );
};

export default LandingPage;
