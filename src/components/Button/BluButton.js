import React from "react";
import Button from "react-bootstrap/Button";

const BluButton = (props) => {
  return (
    <div>
      <Button
        type={props.type}
        onSubmit={props.actionOnSubmit}
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
