import React, { useContext } from "react";
import styles from "./OrderForm.module.css";
import NewUserForm from "../DiscountForm/NewUserForm/NewUserForm";
import { Context } from "../../context";

export default function OrderForm() {

    const { theme } = useContext(Context);

  return (
    <div
      className={`${styles.orderContainer} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >
      <div className={styles.orderText}>
        <h2>Order details</h2>
        <p className={styles.items}>items</p>
        <p className={styles.total}>Total:</p>
        <p className={styles.price}>$</p>
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
        requestType="Order"
      />
    </div>
  );
}
