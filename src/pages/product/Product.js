import React, { useEffect, useState } from "react";
import axios from "axios";
import BluButton from "../../components/Button/BluButton";
import BluCartButton from "../../components/Button/BluCartButton";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://5844-2806-108e-13-2ed8-bf19-495e-d4cd-6642.ngrok.io/products"
      )
      .then((res) => setData(res.data.payload));
  }, []);

  return (
    <div className="container">
      <main className="product-container row">
        <div className="product-picture container col-6">
          <div className="row">
            <img
              className="col-12 g-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blackpink_PUBG_210321.jpg/800px-Blackpink_PUBG_210321.jpg"
            />
            <img
              className="col-6 g-2"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/blackpink-born-pink-1663323431.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
            />
            <img
              className="col-6 g-2"
              src="https://imgmedia.larepublica.pe/640x377/larepublica/original/2022/06/10/62a3ab0c4b9eb81b6563ae77.webp"
            />
          </div>
        </div>
        <div className="product-details col-6">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2>chamarra mamalona</h2>
            <h4>chirrion de dolares</h4>
            <p>
              ASDAKLÑSDKAÑLSDAÑLÑLDAÑLSDKASLÑDKASÑLDKASDÑLS
              ASKDJASKLDASDASJDKLASJDASLKDASKDJASDLASJDAKLSDJAKLS ASKLDJAKLSD
            </p>
            <div className="buttons-container d-flex flex-column justify-content-center align-items-center g-5">
              <BluButton extraClass="m-5" text="paga prro" />
              <BluCartButton />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
