import React from "react";
import styles from "./OrderForm.module.css";
import NewUserForm from "../DiscountForm/NewUserForm/NewUserForm";
import { useSelector } from "react-redux";


export default function OrderForm() {
  
  const cartState = useSelector((store) => store.cart);
  
  const totalPrice = cartState.products.reduce((acc, el) => acc + el.price * el.amount, 0).toFixed(2);
  const totalItems = cartState.products.reduce((acc, el) => acc + el.amount, 0);
 
   
  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderText}>
        <h2>Order details</h2>
        <p>{totalItems} items </p>
        <p>Total: ${totalPrice} </p>
      </div>

      <NewUserForm
        orderStyles={styles.order_form}
        inputStyles={styles.order_input}
        order_msg_errorStyles={styles.order_msg_errorContainer}
        order_msgStyles={styles.order_msg}
        buttonStyles={styles.order_button}
        icon_containerStyles={styles.order_iconContainer}
        iconStyles={styles.order_icon}
        conf_msgStyles={styles.order_conf_msg}
        buttonText="Order"
        successText="Submitted Order"
        requestType="order"
      />
    </div>
  );
}
