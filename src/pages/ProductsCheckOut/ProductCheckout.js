import React from "react";

const ProductCheckout = () => {
  return (
    <main className="container">
      <h1 className="text-center mb-3">¡Ya casi es tuyo!</h1>
      <div className="col-12 col-md-6"></div>
      <div className="col-12 col-md-6">
        <h3 className="text-center">Son correctos tus datos? </h3>
        <h3 className="text-center">Confirmar</h3>
        <div>
            <span>Nombre:</span>
            <span>Dirección:</span>
            <span>Teléfono:</span>
        </div>
      </div>
    </main>
  );
};

export default ProductCheckout;
