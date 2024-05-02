import gardenSuppliesImage from "../../../media/images/imgForm.svg";
import { NewUserForm } from "../NewUserForm/NewUserForm";
import styles from "./FormDiscount.module.css";

export const FormDiscount = ({ openContentModal }) => {
  return (
    <div className={styles.formContainer}>
      <div className="maincontainer">
        <div className={styles.formWrapperContainer}>
          <h3>5% off on the first order</h3>
          <div className={styles.formBoxContainer}>
            <img
              src={gardenSuppliesImage}
              alt="garden tools"
              className={styles.hiddenContainer}
            />
            <NewUserForm handleOpenModal={openContentModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

