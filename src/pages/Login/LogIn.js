import React from "react";
import BluInput from "../../components/Forms/BluInput";
import { Form } from "react-bootstrap";
import BluButton from "../../components/Button/BluButton";
import loginSvg from "../../../src/media/login.svg";
import BluIlustration from "../../components/Images/BluIlustration";

const LogIn = () => {
  return (
    <div className="container-fluid login-container d-flex flex-column justify-content-center">
      <div className="row">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <BluIlustration src={loginSvg} alt="loading" />
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <Form className="w-100">
            <BluInput
              label="Escribe tu e-mail"
              type="email"
              placeholder="E-mail"
            />
            <BluInput
              label="Ahora sigue tu contraseña"
              type="password"
              placeholder="password"
              text="Los datos introducidos serán resguardados de la mejor manera"
            />
            <BluButton text="Login" />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
