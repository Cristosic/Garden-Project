import React from "react";

import s from "./FormDiscount.module.scss";
import gardenImage from "../../../media/images/imgForm.svg";
import NewUserForm from "../NewUserForm/NewUserForm";

export default function FormDiscount() {
  
  return (
    <div className={s.formContainer}>
      <div className={s.formDiscount}>
          <h3>5% off on the first order</h3>
          <div className={s.formWrapper}>
            <img src={gardenImage} alt="garden tools" className={s.hidden} />
            <NewUserForm />
          </div>
        </div>
      
    </div>
  );
}

