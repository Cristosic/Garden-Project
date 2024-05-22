import React, { useContext } from "react";
import styles from "./CategoryCard.module.css";
import { Context } from "../../../context";

export default function CategoryCard({ id, title, image }) {

  const { theme } = useContext(Context);

  return (
    <div
      className={`${styles.cardContent} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >
      <div className={styles.cardImg}>
        <img
          className={styles.categoriesImg}
          src={`http://localhost:3333${image}`}
          alt={title}
        />
      </div>
      <h4 className={styles.cardTitle}>{title}</h4>
    </div>
  );
}
