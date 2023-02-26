import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const CartCard = () => {
  return (
    <div className="cart-card-container d-flex">
      <img
        className="cart-card-image"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/blackpink-born-pink-1663323431.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
        alt="xinas"
      />
      <div className="d-flex flex-column  justify-content-center ms-2">
        <h4>chamarra mamalona</h4>
        <span>M - 44 mil bolas</span>
      </div>
      <FontAwesomeIcon icon={faCircleXmark} />
    </div>
  );
};

export default CartCard;
