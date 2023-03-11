import React from "react";
import Form from "react-bootstrap/Form";
const RadioButton = (props) => {
  return (
    <Form.Check
      name={props.name}
      disabled={props.isDisabled}
      type={props.type}
      label={props.label}
      id={props.id}
      value={props.value}
      onChange={props.actionOnChange}
    />
  );
};
export default RadioButton;
