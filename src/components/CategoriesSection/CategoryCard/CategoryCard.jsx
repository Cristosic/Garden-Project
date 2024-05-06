import React from "react";
import styles from "./CategoryCard.module.css";

export default function CategoryCard({ id, title, image }) {
  return (
    <div className={styles.cardContent}>
      <div className={styles.cardImg}>
        <img className={styles.categoriesImg} src={`http://localhost:3333${image}`} alt={title} />
      </div>
      <h4 className={styles.cardTitle}>{title}</h4>
    </div>
  );
}
