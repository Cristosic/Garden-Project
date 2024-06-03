import React from "react";
import styles from "./OrderForm.module.css";
import NewUserForm from "../DiscountForm/NewUserForm/NewUserForm";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteAllProductsAction } from "../../store/slices/cartSlice";

export default function OrderForm() {

  // const cartState = useSelector((state) => state.cart);

  // const dispatch = useDispatch();

  // const totalItems = cartState.reduce((acc, item) => acc + item.count, 0);
  // const totalPrice = cartState.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2);

  // const handleDeleteAllProducts = () => {
  //   dispatch(deleteAllProductsAction());
  // };

  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderText}>
        <h2>Order details</h2>
        <p>{0} items </p>
        <p>Total: ${0} </p>
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
        // onDeleteAllProducts={handleDeleteAllProducts}
      />
    </div>
  );
}
