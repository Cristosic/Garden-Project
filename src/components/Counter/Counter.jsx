import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/slices/counterSlice";
import styles from './Counter.module.css';

const Counter = ({ productId }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter[productId] || 1);

  const countIncrement = () => {
    dispatch(increment({ productId }));
  };

  const countDecrement = () => {
    if (counter > 1) {
      dispatch(decrement({ productId }));
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