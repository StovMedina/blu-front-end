import * as yup from "yup";

//const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRules = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schema = yup.object().shape({
  email: yup
    .string()
    .email("El email no es valido")
    .required("Introduce un email valido")
    .matches(emailRules),
  password: yup.string().required("Por favor, introduce tu contraseña"),
  //.matches(passwordRules, "Debe contener al menos 8 caracteres"),
});

export default schema;
