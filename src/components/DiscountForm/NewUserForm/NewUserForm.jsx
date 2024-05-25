import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../../store/slices/newuserSlice";
import styles from "./NewUserForm.module.css";
import { useForm } from "react-hook-form";
import { BsXOctagon } from "react-icons/bs";
import { useState } from "react";
import ModalWindow from "../../ModalWindow/ModalWindow";

export default function NewUserForm() {

  const dispatch = useDispatch();

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [buttonText, setButtonText] = useState("Get a discount");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const nameRegister = register("name", {
    required: "*Name field is required",
    pattern: {
      value: /^[A-Za-z]+(?:['-][A-Za-z]+)?(?: [A-Za-z]+(?:['-][A-Za-z]+)?)?$/,
      message: "*Please enter a valid name",
    },
  });

  const numberRegister = register("number", {
    required: "*Phone number field is required",
    pattern: {
      value: /^[0-9]+$/,
      message: "*Please enter a valid phone number",
    },
  });

  const emailRegister = register("email", {
    required: "*Email field is required",
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "*Please enter  valid email address",
    },
  });

  const getData = (newUser) => {
    console.log(newUser);

    dispatch(addNewUser(newUser));
    reset();

    setConfirmationMessage("The discount has been successfully sent by email.");
    setButtonText("Request Submitted");
    setIsSubmitted(true);

    setTimeout(() => {
      setConfirmationMessage("");
      setButtonText("Get a discount");
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <form
      className={`${styles.newUser} `}
      onSubmit={handleSubmit(getData)}
    >
      <div className={styles.error_imput}>
        {" "}
        {errors.name && (
          <p className={`${styles.error_msg} `}>
            {errors.name.message}
          </p>
        )}
      </div>

      <input
        className={`${styles.inputForm} `}
        type="text"
        placeholder="Name"
        name="name"
        {...nameRegister}
      />

      <div className={styles.error_imput}>
        {errors.number && (
          <p className={`${styles.error_msg} `}>
            {errors.number.message}
          </p>
        )}{" "}
      </div>

      <input
        className={`${styles.inputForm} `}
        type="text"
        placeholder="Phone number"
        name="number"
        {...numberRegister}
      />

      <div className={styles.error_imput}>
        {errors.email && (
          <p className={`${styles.error_msg} `}>
            {errors.email.message}
          </p>
        )}{" "}
      </div>

      <input
        className={`${styles.inputForm} `}
        type="text"
        placeholder="Email"
        name="email"
        {...emailRegister}
      />

      {errors.name && (
        <div className={styles.error_icon_container}>
          <BsXOctagon className={styles.error_icon} />
          <p className={`${styles.conf_msg}`}>
            Wrong input. Try again
          </p>
        </div>
      )}

      {confirmationMessage && (
        <div className={styles.conf_msg_container}> 
          <p className={styles.conf_msg}>{confirmationMessage}</p>
        </div>
      )}

      <div className={styles.buttonContainer}>
        <button
          className={`${styles.submitButton}  ${
            isSubmitted ? styles.submittedButton : ""
          }`}
          type="submit"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}
