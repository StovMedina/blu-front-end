import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const BluCartButton = (props) => {
  return (
    <FontAwesomeIcon onClick={props.actionOnClick} icon={faShoppingCart} />
  );
};

export default BluCartButton;
