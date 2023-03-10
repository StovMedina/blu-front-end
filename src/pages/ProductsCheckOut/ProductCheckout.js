import React from "react";
import RadioButton from "../../components/Button/RadioButton";
import Form from "react-bootstrap/Form";
import BluButton from "../../components/Button/BluButton";
import { useNavigate } from "react-router-dom";

const ProductCheckout = () => {
  const navigate = useNavigate();
  return (
    <main className="container">
      <h1 className="text-center mb-3">¡Ya casi es tuyo!</h1>
      <div className="row">
        <div className="col-12 col-md-6">Cards de productos adquiridos</div>
        <div className="col-12 col-md-6">
          <h3 className="text-center">Son correctos tus datos? </h3>
          <h3 className="text-center">Datos de Entrega</h3>
          <div className="d-flex flex-column">
            <span>Nombre:</span>
            <span>Dirección:</span>
            <span>Teléfono:</span>
          </div>
          <Form>
            <RadioButton
              name="shipping"
              type="radio"
              label="Envio estandar gratis"
            />
            <RadioButton
              name="shipping"
              type="radio"
              label="Entrega premium $50"
            />
            <RadioButton
              name="shipping"
              type="radio"
              label="Entrega en punta de venta gratis"
            />
          </Form>
          <div className="col-12 d-flex align-items-center justify-content-end">
            <span onClick={() => navigate("/blu")}>Cancelar</span>
            <BluButton
              extraClass="ms-5"
              actionOnClick={() => navigate("/")}
              variant="primary"
              text="Pagar"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductCheckout;
