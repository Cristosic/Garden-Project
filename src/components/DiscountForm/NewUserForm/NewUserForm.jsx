import { useDispatch } from "react-redux";
import { addNewUser } from "../../../store/slices/userSlice";
import s from "./NewUserForm.module.scss";

export default function NewUserForm() {
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    const { name, number, email } = e.target;

    const newUser = {
      id: Date.now(),
      name: name.value,
      number: number.value,
      email: email.value,
    };

    console.log(newUser);

    dispatch(addNewUser(newUser));
    e.target.reset();
  };

  return (
    <div className={s.newForm}>
      <form className={s.form} onSubmit={submit}>
        <input
          className={s.inputForm}
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className={s.inputForm}
          type="text"
          placeholder="Phone number"
          name="number"
        />
        <input
          className={s.inputForm}
          type="text"
          placeholder="Email"
          name="email"
        />
        <div className={s.buttonForm}>
          <button className={s.submitButton} type="submit">
            Get a discount
          </button>
        </div>
      </form>
    </div>
  );
}