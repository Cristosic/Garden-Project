import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import styles from "./NewUserForm.module.css";

export const NewUserForm = ({inputStyles, formStyles, buttonStyles,
  buttonText = "Get a discount",
  successText = "Submitt",
}) => {

  const { handleSubmit, reset, formState: { errors }, } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const handleUserData = (data) => {
   
    const userData = {
      ...data,
      id: uuidv4(),
    };
    
    
    handleSubmit(userData);
  
    setSubmitted(true);
    reset();
  };
 
  const handleInputChange = () => {
    setSubmitted(false);
  };

  return (
    <div className={`${styles.data_Form} ${formStyles}`}>
      
      <form onSubmit={handleSubmit(handleUserData)}>
        <input
          onFocus={handleInputChange}
          type="text"
          placeholder="Your Name"
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
          value={submitted ? successText : buttonText}
          className={`${styles.submit_button} ${
            submitted ? styles.successful_button : ""
          } ${buttonStyles}`}
        />
      </form>
    </div>
  );
};
