import React, { useEffect } from "react";
import styles from "./ModalWindow.module.css";
import darkCrossIcon from "../../media/icons/darkCrossIcon.svg";

export default function ModalWindow({ isOpen, isClosed, children, cardContentStyles }) {
  
  const onWrapper = () => {
    isClosed();
  };


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modal_wrapper} onClick={onWrapper}>
            <div
              className={`${styles.modal_content} ${cardContentStyles}`}
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
