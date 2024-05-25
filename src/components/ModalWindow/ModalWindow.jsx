import React, { useContext } from "react";
import styles from "./ModalWindow.module.css";
import darkCrossIcon from "../../media/icons/darkCrossIcon.svg";

export default function ModalWindow({ isOpen, isClosed, children }) {
  
  const onWrapper = () => {
    isClosed();
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modal_wrapper} onClick={onWrapper}>
            <div
              className={styles.modal_content}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={darkCrossIcon}
                alt=""
                onClick={() => isClosed()}
                className={styles.modalCross}
              />
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
