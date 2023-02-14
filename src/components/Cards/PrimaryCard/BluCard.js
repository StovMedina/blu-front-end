import React from "react";
import Card from "react-bootstrap/Card";

function BluCard(props) {
  return (
    <Card>
      <Card.Img variant={props.variant} src={props.src} />
      <Card.Body>
        <Card.Title>{props.cardTitle}</Card.Title>
        <Card.Text>{props.cardText}</Card.Text>
        {props.children}
      </Card.Body>
    </Card>
  );
}

export default BluCard;
