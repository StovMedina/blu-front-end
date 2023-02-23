import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
//import { useMercadopago } from "react-sdk-mercadopago";

function BluCard(props) {
  // const mercadopago = useMercadopago.v2(
  //   "TEST-e877fe73-bb6a-45e5-adb6-de90b04f0862",
  //   {
  //     locale: "es-MX",
  //   }
  // );

  // useEffect(() => {
  //   if (mercadopago) {
  //     mercadopago.checkout({
  //       preference: {
  //         id: "243699844-eb349d09-e1ac-4d00-b4b4-cca2800cd2e0",
  //       },
  //       render: {
  //         container: "#" + props.id,
  //         label: "Pay",
  //       },
  //     });
  //   }
  // }, [mercadopago]);

  // console.log(props.id);

  return (
    <Card className="card-product">
      <Card.Img variant={props.variant} src={props.src} />
      <Card.Body>
        <Card.Title>{props.cardTitle}</Card.Title>
        <Card.Text>{props.cardText}</Card.Text>
        {props.children}
        <div id={props.id}></div>
      </Card.Body>
    </Card>
  );
}

export default BluCard;
