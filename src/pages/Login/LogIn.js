import React, { useState } from "react";
import BluInput from "../../components/Forms/BluInput";
import { Form } from "react-bootstrap";
import BluButton from "../../components/Button/BluButton";
import loginSvg from "../../../src/media/login.svg";
import BluIlustration from "../../components/Images/BluIlustration";
import { useFormik } from "formik";
import schema from "../../schemas/loginSchema";
import apiURL from "../../config";
import axios from "axios";
import { useNavigate } from "react-router";
import jwtDecode from "jwt-decode";

const LogIn = () => {
  const navigate = useNavigate();

  const decodeToken = (token) => {
    const decode = jwtDecode(token);
    if (decode.isAdmin === true) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  const handleOnSubmit = (values) => {
    axios
      .post(`${apiURL}/users/auth`, values)
      .then((res) => localStorage.setItem("token", res.data.token))
      .then(() => decodeToken(localStorage.getItem("token")));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  const handleGoogle = () => {
    window.location.replace(`${apiURL}/login`);
  };

  return (
    <div className="container-fluid login-container d-flex flex-column justify-content-center">
      <div className="row">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <BluIlustration src={loginSvg} alt="loading" />
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <Form className="w-100" onSubmit={formik.handleSubmit}>
            <BluInput
              name="email"
              label="Escribe tu e-mail"
              type="email"
              placeholder="E-mail"
              value={formik.values.email}
              actionOnChange={formik.handleChange}
              text={formik.errors.email}
            />
            <BluInput
              name="password"
              label="Ahora sigue tu contraseña"
              type="password"
              placeholder="password"
              text={formik.errors.password}
              value={formik.values.password}
              actionOnChange={formik.handleChange}
            />
            <BluButton text="Login" type="submit" />
          </Form>
          <BluButton
            text="accede con gugul"
            type="button"
            actionOnClick={handleGoogle}
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
