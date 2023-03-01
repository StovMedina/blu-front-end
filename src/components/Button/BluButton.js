import React from "react";
import Button from "react-bootstrap/Button";

const BluButton = (props) => {
  return (
    <div>
      <Button
        onClick={props.actionOnClick}
        className={props.extraClass}
        href={props.href}
        variant={props.variant}
        type={props.type}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default BluButton;
