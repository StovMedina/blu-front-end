import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const BluCartButton = (props) => {
  return (
    <div>
      <Button className={props.extraClass}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
    </div>
  );
};

export default BluCartButton;
