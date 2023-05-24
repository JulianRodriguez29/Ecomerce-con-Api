import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import './ProductSection.css';

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://localhost:7230/api/Productos');
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredProducts = category
    ? products.filter((product) => product.categoria === category)
    : products;

  return (
    <div>
      <h2>Product Section</h2>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="Categoría 1">Categoria 1</option>
          <option value="Categoría 2">Categoria 2</option>
          {/* Agrega más opciones de categoría según tus necesidades */}
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            name={product.nombre}
            price={product.precio}
            description={product.descripcion}
            image={product.imagen}
            addToCart={() => console.log('Agregar al carrito', product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
