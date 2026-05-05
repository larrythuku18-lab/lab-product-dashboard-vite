import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const containerClass = product.inStock
    ? styles.productCard
    : `${styles.productCard} ${styles.outOfStockClass}`;

  return (
    <div className={containerClass}>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;