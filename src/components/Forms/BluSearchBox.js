import React from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const BluSearchBox = (props) => {
  return (
    <div className="d-flex align-items-center">
      <Form.Control
        type="search"
        placeholder={props.placeholder}
        className="me-2"
        aria-label={props.ariaLabel}
      ></Form.Control>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default BluSearchBox;
