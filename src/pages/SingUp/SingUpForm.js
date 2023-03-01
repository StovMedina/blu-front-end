import React,{ useState } from "react";
import Form from "react-bootstrap/Form";
import BluButton from "../../components/Button/BluButton";
import { useNavigate } from "react-router-dom";
import BluInput from "../../components/Forms/BluInput";
import axios from 'axios';

const SingUpForm = () => {
 const navigate = useNavigate();
 const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('api.aanexo.com/users/sign-up', formData);
      console.log(response.data);
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
      <Form onSubmit={handleSubmit}>

      <BluInput
        extraClass="col-12 col-md-"
        type="text"
        placeholder="nombre de usuario  "
        label="Introduce tu nombre de usuario"
        name="nombre de usuario"
        formData={formData.userName}
        actionOnChange={handleChange}
        />
        <BluInput
        extraClass="col-12 col-md-"
        type="email"
        placeholder="email"
        label="Introduce tu email"
        name="email"
        formData={formData.email}
        actionOnChange={handleChange}
        />
        <BluInput
        extraClass="col-12 col-md-"
        type="password"
        placeholder="contraseña"
        label="Introduce tu contraseña"
        name="password"
        formData={formData.password}
        actionOnChange={handleChange}
        />
         <BluInput
        extraClass="col-12 col-md-"
        type="password"
        placeholder="confirma tu contraseña"
        label="Confirma tu contraseña"
        name="confirmar contraseña"
        formData={formData.confirmPassword}
        actionOnChange={handleChange}
        />
        <BluButton
          extraClass="ms-5"
          actionOnClick={() => navigate("/")}
          variant="primary"
          type="submit"
          text="Submit"
        />
      </Form>
    </main>
  );
};

export default SingUpForm;


