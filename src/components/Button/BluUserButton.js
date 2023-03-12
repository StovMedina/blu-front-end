import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const BluUserButton = (props) => {
  return (
    <FontAwesomeIcon
      icon={faUser}
      onClick={props.actionOnClick}
      className={props.extraClass}
    />
  );
};

export default BluUserButton;
