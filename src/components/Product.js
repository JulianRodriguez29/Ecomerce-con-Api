import React from 'react';
import logo from './logo.png'

const Product = ({ name, price, description, image, addToCart }) => {
  return (
    <div className="card">
      <img src={logo} className="card-img-top bg-black d-inline-block align-center" alt={name} height="200"  />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: ${price}</p>
        <p className="card-text">{description}</p>
        <button onClick={addToCart} className="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Product;
