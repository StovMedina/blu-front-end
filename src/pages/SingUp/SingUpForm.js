import React from "react";
import Form from "react-bootstrap/Form";
import BluButton from "../../components/Button/BluButton";
import { useNavigate } from "react-router-dom";
import BluInput from "../../components/Forms/BluInput";

const SingUpForm = () => {
 const navigate = useNavigate();
  return (
    <main>
      <Form>

      <BluInput
        extraClass="col-12 col-md-"
        type="text"
        placeholder="nombre de usuario  "
        label="Introduce tu nombre de usuario"
        />
        <BluInput
        extraClass="col-12 col-md-"
        type="email"
        placeholder="email"
        label="Introduce tu email"
        />
        <BluInput
        extraClass="col-12 col-md-"
        type="password"
        placeholder="constraseña"
        label="Introduce tu constraseña"
        />
         <BluInput
        extraClass="col-12 col-md-"
        type="password"
        placeholder="confirma tu contraseña"
        label="Confirma tu contraseña"
        />
        <BluButton
          extraClass="ms-5"
          actionOnClick={() => navigate("/")}
          variant="primary"
          text="Submit"
        />
      </Form>
    </main>
  );
};

export default SingUpForm;
