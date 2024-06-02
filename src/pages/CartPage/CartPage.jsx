import React from "react";
import styles from "./CartPage.module.css";
import OrderForm from "../../components/OrderForm/OrderForm";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartPage() {
  const basketCart = useSelector((state) => state.cart?.products || []);
  const isCartEmpty = basketCart.length === 0;
  return (
    <div className={styles.container}>
      <div className={styles.cartPage}>
        <h1 className={styles.titlePage}>Shopping cart</h1>
        <div className={styles.line}></div>

        <Link to={"/"}>
          <button className={styles.buttonActive}>Back to the store</button>
        </Link>
      </div>
      {isCartEmpty ? (
        <div>
          <p className={styles.text}>
            Looks like you have no items in your basket currently.
          </p>
          <Link to={"/products"}>
            <button className={styles.btn}>Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div>
          <OrderForm />
        </div>
      )}
    </div>
  );
}
