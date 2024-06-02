import React, { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../../store/slices/counterSlice";
import styles from './Counter.module.css';
import { Context } from '../../context';

const Counter = () => {

  const { theme } = useContext(Context);
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.productCounterContainer} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >
      <button
        className={styles.quantityButton}
        onClick={() => dispatch(decrease())}
      >
        -
      </button>
      <div className={styles.quantity}>{counter}</div>
      <button
        className={styles.quantityButton}
        onClick={() => dispatch(increase())}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
