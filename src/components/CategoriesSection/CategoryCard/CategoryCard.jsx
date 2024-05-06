import React from "react";
import styles from "./CategoryCard.module.css";

export default function CategoryCard({ id, title, image }) {
  return (
    <div className={styles.cardContent}>
      <div className={`http://localhost:3333${image}`}>
        <img className={styles.categoriesImg} src={image} alt={title} />
      </div>
      <h4 className={styles.cardTitle}>{title}</h4>
    </div>
  );
}
