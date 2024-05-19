import React from "react";
import styles from "./FormDiscount.module.scss";
import gardenImage from "../../../media/images/gardenImage.svg";
import NewUserForm from "../NewUserForm/NewUserForm";

export default function FormDiscount() {
  return (
    <div className="container">
      <div className={styles.formContainer}>
         <div className={styles.formDiscount}>
          <h3>5% off on the first order</h3>
          <div className={styles.formWrapper}>
            <img
              src={gardenImage}
              alt="garden tools"
              className={styles.hidden}
            />
            <NewUserForm />
          </div>
       </div> 
        </div>
    </div>
  );
}
