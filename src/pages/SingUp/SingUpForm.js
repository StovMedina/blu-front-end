import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import BluButton from "../../components/Button/BluButton";
// import { useNavigate } from "react-router-dom";
import BluInput from "../../components/Forms/BluInput";
import axios from "axios";
import apiURL from "../../config";


const SingUpForm = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async ()=> {
    try {
      if (formData.password === formData.confirmPassword) {
        const response = await axios.post(`${apiURL}/users`, formData);
        console.log(response.data);
      } else {
        console.log("Contraseña invalida");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <main>
      <Form onSubmit={()=> handleSubmit()}>
        <BluInput
          extraClass="col-12 col-md-6"
          type="text"
          placeholder="nombre de usuario  "
          label="Introduce tu nombre de usuario"
          name="userName"
          value={formData.userName}
          actionOnChange={handleChange}
        />
        <BluInput
          extraClass="col-12 col-md-6"
          type="email"
          placeholder="email"
          label="Introduce tu email"
          name="email"
          value={formData.email}
          actionOnChange={handleChange}
        />
        <BluInput
          extraClass="col-12 col-md-6"
          type="password"
          placeholder="contraseña"
          label="Introduce tu contraseña"
          name="password"
          value={formData.password}
          actionOnChange={handleChange}
        />
        <BluInput
          extraClass="col-12 col-md-6"
          type="password"
          placeholder="confirma tu contraseña"
          label="Confirma tu contraseña"
          name="confirmPassword"
          value={formData.confirmPassword}
          actionOnChange={handleChange}
        />
        <BluButton
          extraClass="ms-5"
          variant="primary"
          type="submit"
          text="Submit"
        />
      </Form>
    </main>
  );
};

export default SingUpForm;
