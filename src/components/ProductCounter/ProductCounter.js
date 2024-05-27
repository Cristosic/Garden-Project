import React from 'react';
import styles from './ProductCounter.module.css';

const ProductCounter = ({ quantity, setQuantity }) => {
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.ProductCounterContainer}>
      <button className={styles.quantityButton} onClick={decrement}>-</button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.quantityButton} onClick={increment}>+</button>
    </div>
  );
};

export default ProductCounter;

