import React, { useEffect, useState } from "react";
import BluCard from "../../components/Cards/PrimaryCard/BluCard";
import axios from "axios";
import BluButton from "../../components/Button/BluButton";
import { useNavigate } from "react-router-dom";
import apiURL from "../../config";

const ProductsAdmin = (props) => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiURL}/products`).then((res) => setData(res.data.payload));
  }, []);

  const handleEdit = (id) => {
    navigate(`/product/${id}`);
  };

  const handleDelete = (id) => {
    axios.delete(`${apiURL}/products/${id}`).then(() => {
      setData(data.filter((product) => product._id !== id));
    });
  };

  return (
    <div className={`landing-container${props.extraClass}`}>
      <main className="landing-main__container container-fluid">
        <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
          {data.length < 1 ? (
            <div>cargando...</div>
          ) : (
            data.map((product, index) => (
              <div className="col" key={index}>
                <BluCard
                  extraClass="p-1"
                  id={product._id}
                  variant="top"
                  src={product.image}
                  cardTitle={product.name}
                  cardText={product.description}
                  children={[
                    <BluButton text="Editar"></BluButton>,
                    <BluButton
                      text="Borrar"
                      actionOnClick={() => handleDelete(product._id)}
                    ></BluButton>,
                  ]}
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

export default ProductsAdmin;
