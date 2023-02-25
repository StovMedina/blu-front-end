import React, { useEffect, useState } from "react";
import BluCard from "../../components/Cards/PrimaryCard/BluCard";
import "./LandingPage.scss";
import axios from "axios";
import BluButton from "../../components/Button/BluButton";
import BluCartButton from "../../components/Button/BluCartButton";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.aanexo.com/products")
      .then((res) => setData(res.data.payload));
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

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
                  actionOnClick={() => handleClick(product._id)}
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
