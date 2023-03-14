import * as yup from "yup";

const shippingSchema = yup.object().shape({
  name: yup.string().required("Este campo es obligatorio"),
  lastName: yup.string().required("Este campo es obligatorio"),
  phone: yup.number().required("Este campo es obligatorio"),
  street: yup.string().required("Este campo es obligatorio"),
  intNumber: yup.number().required("Este campo es obligatorio"),
  extNumber: yup.number().required("Este campo es obligatorio"),
  neighborhood: yup.string().required("Este campo es obligatorio"),
  postalCode: yup.number().required("Este campo es obligatorio"),
  city: yup.string().required("Este campo es obligatorio"),
  state: yup.string().required("Este campo es obligatorio"),
});

export default shippingSchema;
