import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import BluButton from "../../components/Button/BluButton";
import BluInput from "../../components/Forms/BluInput";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import apiURL from "../../config";
import shippingSchema from "../../schemas/ShippingDetailsSchema";
import { useFormik } from "formik";
import ProductCheckout from "../ProductsCheckOut/ProductCheckout";

const ShippingDetails = () => {
  const [checkOut, setCheckOut] = useState(false);

  const [cartCheck, setCartCheck] = useState("");

  const [data, setData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    if (!cartStorage) {
      navigate("/blu/");
    }
    const cartString = JSON.parse(cartStorage);
    setCartCheck(cartString);
  }, []);

  // const handleCheckOut = () => {
  //   const idForCheckOut = { id: cartCheck };
  //   axios.post(`${apiURL}/payment`, idForCheckOut).then((res) => {
  //     window.location.replace(res.data.payload.body.init_point);
  //     createOrder();
  //   });
  // };

  const handleConfirm = () => {
    const dispatch = {
      ...formik.values,
      cartCheck,
    };
    setData(dispatch);
    setCheckOut(true);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      phone: 0,
      street: "",
      intNumber: 0,
      extNumber: 0,
      postalCode: 0,
      neighborhood: "",
      city: "",
      state: "",
    },
    validationSchema: shippingSchema,
    onSubmit: handleConfirm,
  });

  return (
    <>
      <div className={checkOut ? "d-none" : "d-block"}>
        <main className="container">
          <h1 className="text-center mb-3">Datos de Entrega</h1>
          <div className="empty-container"></div>
          <Form className="row" onSubmit={formik.handleSubmit}>
            <BluInput
              name="name"
              extraClasses="col-12 col-md-8"
              type="text"
              placeholder="Nombre"
              label="Nombre de la persona que recibe"
              value={formik.values.name}
              actionOnChange={formik.handleChange}
              text={formik.errors.name}
            />
            <BluInput
              name="lastName"
              extraClasses="col-12 col-md-2"
              type="text"
              placeholder="Apellido"
              value={formik.values.lastName}
              actionOnChange={formik.handleChange}
              text={formik.errors.lastName}
            />
            <BluInput
              name="phone"
              extraClasses="col-12 col-md-2"
              type="phone"
              placeholder="Telefono"
              value={formik.values.phone}
              actionOnChange={formik.handleChange}
              text={formik.errors.phone}
            />
            <BluInput
              name="street"
              extraClasses="col-12 col-md-6"
              type="text"
              placeholder="Calle"
              value={formik.values.street}
              actionOnChange={formik.handleChange}
              text={formik.errors.street}
            />
            <BluInput
              name="intNumber"
              extraClasses="col-12 col-md-2"
              type="number"
              placeholder="Nùmero Int"
              value={formik.values.intNumber}
              actionOnChange={formik.handleChange}
              text={formik.errors.intNumber}
            />
            <BluInput
              name="extNumber"
              extraClasses="col-12 col-md-2"
              type="number"
              placeholder="Nùmero Ext"
              value={formik.values.extNumber}
              actionOnChange={formik.handleChange}
              text={formik.errors.extNumber}
            />
            <BluInput
              name="postalCode"
              extraClasses="col-12 col-md-2"
              type="number"
              placeholder="Código Postal"
              value={formik.values.postalCode}
              actionOnChange={formik.handleChange}
              text={formik.errors.postalCode}
            />
            <BluInput
              name="neighborhood"
              extraClasses="col-12 col-md-4"
              type="text"
              placeholder="Colonia"
              value={formik.values.neighborhood}
              actionOnChange={formik.handleChange}
              text={formik.errors.neighborhood}
            />
            <BluInput
              name="city"
              extraClasses="col-12 col-md-4"
              type="text"
              placeholder="Ciudad"
              value={formik.values.city}
              actionOnChange={formik.handleChange}
              text={formik.errors.city}
            />
            <BluInput
              name="state"
              extraClasses="col-12 col-md-4"
              type="text"
              placeholder="Estado"
              value={formik.values.state}
              actionOnChange={formik.handleChange}
              text={formik.errors.state}
            />
            <div className="col-12 d-flex align-items-center justify-content-end">
              <span onClick={() => navigate("/blu/")}>Cancelar</span>
              <BluButton
                extraClass="ms-5"
                variant="primary"
                text="Continuar"
                type="submit"
              />
            </div>
          </Form>
        </main>
      </div>
      {checkOut ? <ProductCheckout data={data} /> : ""}
    </>
  );
};

export default ShippingDetails;
