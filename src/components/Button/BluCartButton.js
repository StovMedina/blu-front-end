import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const BluCartButton = (props) => {
  return (
<<<<<<< HEAD
    <FontAwesomeIcon onClick={props.actionOnClick} icon={faShoppingCart} />
=======
    <div>
      <Button className={props.extraClass}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
    </div>
>>>>>>> develop
  );
};

export default BluCartButton;
