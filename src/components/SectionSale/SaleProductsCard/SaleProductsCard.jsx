import React from "react";
import styles from "./SaleProductsCard.module.scss";
import heart from "../../../media/icons/heart.svg";
import bag from "../../../media/icons/bag.svg";

function SaleProductsCard({ id, title, image, price, discont_price }) {
  return (
    <div className={styles.cardContent}>
      <div className={styles.cardImg}>
        <img src={image} alt={title} />
        <div className={styles.discountLabel}>
          -{Math.round(100 - (discont_price / price) * 100)}%
        </div>
        <div className={styles.cardIcons}>
          <img src={heart} alt="" className={styles.heart} />
          <img src={bag} alt="" className={styles.shoppingBag} />
        </div>
      </div>
      <h4>{title}</h4>
      <div className={styles.priceContainer}>
        <p>${Math.round(price)}</p>
        <p>${Math.round(discont_price)}</p>
      </div>
    </div>
  );
}

export default SaleProductsCard;
