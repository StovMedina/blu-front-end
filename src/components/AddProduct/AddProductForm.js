import React, {useState} from 'react'
import axios from 'axios'
import { Form } from 'react-router-dom';
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
  axios.post(`${apiURL}/products`, product)
    .then((res) => console.log(res.data))
    .catch((error) => console.error(error));
  };
  return (
    <Form actionOnSubmit={handleSubmit}>
     <BluInput
     label="Nombre del producto" 
    type="text"
    value={product.name}
    actionOnChange={handleChange}
     />
<BluInput
        label="Talla"
        type="text"
        value={product.size}
        actionOnChange={handleChange}
      />
<BluInput
        label="Marca"
        type="text"
        value={product.brand}
        actionOnChange={handleChange}
      />
<BluInput
        label="Detalles de reparacion"
        type="text"
        value={product.reparationDetails}
        actionOnChange={handleChange}
      />
  <BluInput
        label="Color"
        type="text"
        value={product.color}
        actionOnChange={handleChange}
      />
    <BluInput
        label="Imagen"
        type="text"
        value={product.image}
        actionOnChange={handleChange}
      />

<BluInput
        label="Nombre del producto"
        type="text"
        value={product.name}
        actionOnChange={handleChange}
      />
      <BluInput
        label="Cantidad"
        type="text"
        value={product.quantity}
        actionOnChange={handleChange}
      />
      <BluInput
        label="Precio"
        type="text"
        value={product.price}
        actionOnChange={handleChange}
      />
      <BluInput
        label="Descripción"
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
