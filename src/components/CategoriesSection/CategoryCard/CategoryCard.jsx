import React from "react";
import styles from "./CategoryCard.module.css";

export default function CategoryCard({ id, title, image }) {
  return (
    <div className={styles.cardContent}>
      <div className={styles.cardImg}>
        <img src={image} alt={title} />
      </div>
      <h4>{title}</h4>
    </div>
  );
}
