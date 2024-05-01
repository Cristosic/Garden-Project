import gardenSuppliesImage from "../../../media/images/imgForm.svg";
import { NewUserForm } from "../NewUserForm/NewUserForm";
import styles from "./FormDiscount.module.css";

export const FormDiscount = ({ openContentModal }) => {
  return (
    <div className={styles.form}>
      <div className="container">
        <div className={styles.form_wrapper}>
          <h3>5% off on the first order</h3>
          <div className={styles.formBox}>
            <img
              src={gardenSuppliesImage}
              alt="garden supplies"
              className={styles.hidden}
            />
            <NewUserForm handleOpenModal={openContentModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

