import React from "react";
import Form from "react-bootstrap/Form";
import BluButton from "../../components/Button/BluButton";
import BluInput from "../../components/Forms/BluInput";
import { useNavigate } from "react-router-dom";

const ShippingDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
    
      <main className="container">
      <h1 className="text-center mb-3">Datos de Entrega</h1>
      <div className="empty-container"></div>
        <Form className="row">
          <BluInput
            extraClasses="col-12 col-md-8"
            type="text"
            placeholder="Nombre"
            label="Nombre de la persona que recibe"
          />
          <BluInput
            extraClasses="col-12 col-md-2"
            type="text"
            placeholder="Apellido"
          />
          <BluInput
            extraClasses="col-12 col-md-2"
            type="phone"
            placeholder="Telefono"
          />
          <BluInput
            extraClasses="col-12 col-md-6"
            type="text"
            placeholder="Calle"
          />
          <BluInput
            extraClasses="col-12 col-md-2"
            type="number"
            placeholder="Nùmero Int"
          />
          <BluInput
            extraClasses="col-12 col-md-2"
            type="number"
            placeholder="Nùmero Ext"
          />
          <BluInput
            extraClasses="col-12 col-md-2"
            type="text"
            placeholder="Còdigo Postal"
          />
          <BluInput
            extraClasses="col-12 col-md-4"
            type="text"
            placeholder="Colonia"
          />
          <BluInput
            extraClasses="col-12 col-md-4"
            type="text"
            placeholder="Ciudad"
          />
          <BluInput
            extraClasses="col-12 col-md-4"
            type="text"
            placeholder="Estado"
          />
          <div className="col-12 d-flex align-items-center justify-content-end">
            <span onClick={() => navigate("/")}>
              Cancelar
            </span>
            <BluButton
              extraClass="ms-5"
              actionOnClick={() => navigate("/")}
              variant="primary"
              text="Continuar"
            />
          </div>
        </Form>
      </main>
    </div>
  );
};

export default ShippingDetails;
