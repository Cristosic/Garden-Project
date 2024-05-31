import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../../store/slices/counterSlice";
import styles from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div className={styles.ProductCounterContainer}>
      <button className={styles.quantityButton} onClick={() => dispatch(decrease())}>-</button>
      <div className={styles.quantity}>{counter}</div>
      <button className={styles.quantityButton} onClick={() => dispatch(increase())}>+</button>
    </div>
  );
};

export default Counter;
