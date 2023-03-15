import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import BluButton from "../../Button/BluButton";

const CartCard = (props) => {
  return (
    <div className="cart-card-container d-flex">
      <img className="cart-card-image" src={props.image} alt="xinas" />
      <div className="d-flex flex-column  justify-content-center ms-2">
        <h4>{props.name}</h4>
        <span>
          Talla: {props.size} Precio: {props.price}
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default CartCard;
