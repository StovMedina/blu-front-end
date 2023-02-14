import React from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const BluSearchBox = () => {
  return (
    <div className="d-flex align-items-center">
      <Form.Control
        type="search"
        placeholder="buscale prro"
        className="me-2"
        aria-label="Search"
      ></Form.Control>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default BluSearchBox;
