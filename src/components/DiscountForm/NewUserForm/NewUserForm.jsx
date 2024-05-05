import { useDispatch } from "react-redux";
import { addNewUser } from "../../../store/slices/userSlice";
import styles from "./NewUserForm.module.scss";

export default function NewUserForm() {
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();

    const { name, number, email } = event.target;

    const newUser = {
      id: Date.now(),
      name: name.value,
      number: number.value,
      email: email.value,
    };

    console.log(newUser);

    dispatch(addNewUser(newUser));
    event.target.reset();
  };

  return (
    <div className={styles.newForm}>
      <form className={styles.form} onSubmit={submit}>
        <input
          className={styles.inputForm}
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className={styles.inputForm}
          type="text"
          placeholder="Phone number"
          name="number"
        />
        <input
          className={styles.inputForm}
          type="text"
          placeholder="Email"
          name="email"
        />
        <div className={styles.buttonForm}>
          <button className={styles.submitButton} type="submit">
            Get a discount
          </button>
        </div>
      </form>
    </div>
  );
}
