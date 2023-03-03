import React, {useState} from 'react'
import axios from 'axios'
import { Form } from "react-bootstrap";
import BluInput from '../Forms/BluInput';
import BluButton from '../Button/BluButton';
import apiURL from "../../config";


const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    size: "",
    brand: "",
    reparationDetails: "",
    color: "",
    category: "",
    image: "",
    quantity: 0,
    price: 0,
    description: "",
  });
const handleChange = (event) => {
  const { name, value } = event.target;
  setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(product)
  axios.post(`${apiURL}/products`, product)
    .catch((error) => console.error(error));
  };
  return (
    <Form onSubmit={handleSubmit}>
     <BluInput
     label="Nombre del producto" 
    type="text"
    name="name"
    value={product.name}
    actionOnChange={handleChange}
     />
<BluInput
        label="Talla"
        name="size"
        type="text"
        value={product.size}
        actionOnChange={handleChange}
      />
<BluInput
        label="Marca"
        name="brand"
        type="text"
        value={product.brand}
        actionOnChange={handleChange}
      />
<BluInput
        label="Detalles de reparacion"
        name="reparationDetails"
        type="text"
        value={product.reparationDetails}
        actionOnChange={handleChange}
      />
  <BluInput
        label="Color"
        name="color"
        type="text"
        value={product.color}
        actionOnChange={handleChange}
      />
    <BluInput
        label="Imagen"
        name="image"
        type="text"
        value={product.image}
        actionOnChange={handleChange}
      />
      <BluInput
        label="Cantidad"
        name="quantity"
        type="number"
        value={product.quantity}
        actionOnChange={handleChange}
      />
      <BluInput
        label="Precio"
        name="price"
        type="text"
        value={product.price}
        actionOnChange={handleChange}
      />
      <BluInput
        label="Descripción"
        name="description"
        type="text"
        value={product.description}
        actionOnChange={handleChange}
      />
    <BluButton
    type="submit"
    text="Guardar"
      />
    </Form>
    
  )
};

export default AddProductForm
