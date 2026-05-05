import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {

  const containerClass = product.inStock ? styles.inStock : styles.outOfStock;
  return (
    <div className ={containerClass}>
      
      {/* TODO: Display product name */}
      <h3>{product.name}</h3>

      {/* TODO: Display product price */}
      <p>{product.price}</p>

      {/* TODO: Show if the product is in stock or out of stock */}
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
      
    </div>
  );
};

export default ProductCard;
