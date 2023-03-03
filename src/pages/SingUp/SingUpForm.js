import React, { useCallback } from "react";
import Form from "react-bootstrap/Form";
import BluButton from "../../components/Button/BluButton";
import { useNavigate } from "react-router-dom";
import BluInput from "../../components/Forms/BluInput";
import axios from "axios";
import apiURL from "../../config";
import { useFormik } from "formik";
import singUpSchema from "../../schemas/singUpSchema";


const SingUpForm = () => {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  const handleSubmit = async () => {
    try {
      if (formik.values.password === formik.values.confirmPassword) {
        delete formik.values.confirmPassword;
        const response = await axios.post(`${apiURL}/users`, formik.values);
        if (response.data.payload.id) navigate("/");
      } else {
        console.log("Contraseña invalida");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      userName:"",
      email: "",
      password: "",
      confirmPassword:"",
    },
    validationSchema: singUpSchema,
    onSubmit: handleSubmit,
  });
  // const handleChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  return (
    <main>
      <Form onSubmit={formik.handleSubmit}>
        <BluInput
          extraClass="col-12 col-md-6"
          type="text"
          placeholder="nombre de usuario  "
          label="Introduce tu nombre de usuario"
          name="userName"
          value={formik.values.userName}
          text={formik.errors.userName}
          actionOnChange={formik.handleChange}
        />
        <BluInput
          extraClass="col-12 col-md-6"
          type="email"
          placeholder="email"
          label="Introduce tu email"
          name="email"
          value={formik.values.email}
          text={formik.errors.email}
          actionOnChange={formik.handleChange}
        />
        <BluInput
          extraClass="col-12 col-md-6"
          type="password"
          placeholder="contraseña"
          label="Introduce tu contraseña"
          name="password"
          value={formik.values.password}
          text={formik.errors.password}
          actionOnChange={formik.handleChange}
        />
        <BluInput
          extraClass="col-12 col-md-6"
          type="password"
          placeholder="confirma tu contraseña"
          label="Confirma tu contraseña"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          text={formik.errors.confirmPassword}
          actionOnChange={formik.handleChange}
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
