import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import styles from "./NewUserForm.module.css";

export const NewUserForm = ({
  inputStyles,
  formStyles,
  buttonStyles,
  buttonText = "Get a discount",
  successText = "Submitt",
}) => {

  const { handleSubmit, reset, formState: { errors }, } = useForm();
  const [submittedSuccessful, setSubmittedSuccessful] = useState(false);
  const handlePostUserData = (data) => {
   
    const userData = {
      ...data,
      id: uuidv4(),
    };
    
    handleSubmit  (userData);
  
    setSubmittedSuccessful(true);
    reset();
  };
  // Функция для сброса состояния:
  const handleInputChange = () => {
    setSubmittedSuccessful(false);
  };

  return (
    <div className={`${styles.dataForm} ${formStyles}`}>
      <form onSubmit={handleSubmit(handlePostUserData)}>
        <input
          onFocus={handleInputChange}
          type="text"
          placeholder="Name"
          className={`${styles.form_input} ${inputStyles}`}
        />
        <p className={styles.name}>{`${errors.name?.message || ""}`}</p>

        <input
          onFocus={handleInputChange}
          type="tel"
          placeholder="Phone number"
          className={`${styles.form_input} ${inputStyles}`}
        />
        <p className={styles.phone}>{`${errors.phone?.message || ""}`}</p>
        
        <input
          onFocus={handleInputChange}
          type="email"
          placeholder="Email"
          className={`${styles.form_input} ${inputStyles}`}
        />

        <p className={styles.email}> {`${errors.email?.message || ""}`}</p>

        <input
          type="submit"
          value={submittedSuccessful ? successText : buttonText}
          className={`${styles.submit_button} ${
            submittedSuccessful ? styles.successful_button : ""
          } ${buttonStyles}`}
        />
      </form>
    </div>
  );
};
