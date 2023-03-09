import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const BluUserButton = (props) => {
  return <FontAwesomeIcon onClick={props.actionOnClick} icon={faUser} />;
};

export default BluUserButton;
