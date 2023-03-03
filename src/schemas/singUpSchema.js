import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRules = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const singUpSchema = yup.object().shape({
  userName: yup.string().required("Nombre de usuario es requerido"),
  email: yup
    .string()
    .email()
    .required("Introduce un email valido")
    .matches(emailRules, "Debes acceder con un correo valido"),

  password: yup
    .string()
    .required("Introduce una contraseña")
    .matches(
      passwordRules,
      "Debe contener 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
    ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir"),
});

export default singUpSchema;
