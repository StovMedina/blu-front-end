import React from "react";
import Card from "react-bootstrap/Card";

function BluCard(props) {
  return (
    <Card
      className={`card-product ${props.extraClass}`}
      onClick={props.actionOnClick}
    >
      <Card.Img
        className="card-image__land"
        variant={props.variant}
        onClick={props.actionOnImage}
        src={props.src}
      />
      <Card.Body>
        <Card.Title>{props.cardTitle}</Card.Title>
        <Card.Title>{props.cardTitle2}</Card.Title>
        <Card.Text>{props.cardText}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          {props.children}
        </div>

        <div id={props.id}></div>
      </Card.Body>
    </Card>
  );
}

export default BluCard;
