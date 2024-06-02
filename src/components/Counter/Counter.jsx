import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from './Counter.module.css';
import { decrement, increment } from '../../store/slices/cartProductsSlice';

const Counter = ({ productId }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.cart.products.find(el => el.id === productId)?.amount || 1);

  const countIncrement = () => {
    dispatch(increment(productId));
  };
console.log(countIncrement)

  const countDecrement = () => {
    if (counter > 1) {
      dispatch(decrement(productId));
    }
  };

  return (
    <div className={styles.ProductCounterContainer}>
      <button className={styles.quantityButton} onClick={countDecrement}>-</button>
      <div className={styles.quantity}>{counter}</div>
      <button className={styles.quantityButton} onClick={countIncrement}>+</button>
    </div>
  );
};

export default Counter;