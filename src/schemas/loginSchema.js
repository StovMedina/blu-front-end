import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = yup.object().shape({
  email: yup.string().email().required("Introduce un email valido"),
  password: yup
    .string()
    .required("Por favor, introduce tu contraseña")
    .matches(passwordRules, "Debe contener al menos 8 caracteres"),
});

export default schema;
