import React, { useEffect, useState } from "react";
import axios from "axios";
import BluButton from "../../components/Button/BluButton";
import BluCartButton from "../../components/Button/BluCartButton";
import apiURL from "../../config";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const Product = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${apiURL}/products/${id}`)
      .then((res) => setData(res.data.payload));
  }, []);

  const handleCheckOut = (id) => {
    const idForCheckOut = { id: [id] };
    axios
      .post(`${apiURL}/payment`, idForCheckOut)
      .then((res) => window.location.replace(res.data.payload.body.init_point));
  };

  return (
    <div className="container">
      <main className="product-container row">
        <div className="product-picture container col-sm-12 col-md-6 col-lg-6">
          <div className="row">
            <img
              className="col-4 col-md-12 g-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blackpink_PUBG_210321.jpg/800px-Blackpink_PUBG_210321.jpg"
            />
            <img
              className="col-4 col-md-6 g-2"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/blackpink-born-pink-1663323431.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
            />
            <img
              className="col-4 col-md-6 g-2"
              src="https://imgmedia.larepublica.pe/640x377/larepublica/original/2022/06/10/62a3ab0c4b9eb81b6563ae77.webp"
            />
          </div>
        </div>
        <div className="product-details col-sm-12 col-md-6 col-lg-6">
          <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <h2>{data.name}</h2>
            <h4>{data.price}</h4>
            <p>{data.description}</p>
            <div className="buttons-container d-flex flex-column justify-content-center align-items-center g-5">
              <BluCartButton extraClass="m-4" />
              <BluButton
                actionOnClick={() => handleCheckOut(id)}
                extraClass="m-4"
                text="paga prro"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
