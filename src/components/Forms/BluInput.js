import React from "react";
import Form from "react-bootstrap/Form";

const BluInput = (props) => {
  return (
    <Form.Group className={`mb-3 ${props.extraClasses} `} controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.actionOnChange} name={props.name}/>
      <Form.Text className="text-muted">{props.text}</Form.Text>
    </Form.Group>
  );
};

export default BluInput;
