import React from "react";
import Button from "react-bootstrap/Button";

const BluButton = (props) => {
  return (
    <div>
      <Button
        className={props.extraClass}
        href={props.href}
        variant={props.variant}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default BluButton;
