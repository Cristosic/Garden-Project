import React, { useState } from "react";
import styles from "./SaleProductsCard.module.scss";
import heart from "../../../media/icons/heart.svg";
import bag from "../../../media/icons/bag.svg";
import favoritesHeart from "../../../media/icons/favoritesHeart.svg"
import { useDispatch } from "react-redux";
// import { addCard, deleteCard } from "../../../store/slices/favoritesSlice";

function SaleProductsCard({ id,title,image,price,discont_price }) {

  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  const styleHeart = isFavorite ? favoritesHeart : heart

  // const addFavoritesCard = () => {
  //   dispatch(addCard({ id, title, image, price, discont_price }));
  //   dispatch(deleteCard({ id }))
  //   setIsFavorite(!isFavorite);
  // };

  return (
    <div className={styles.cardContent}>
      <div className={styles.cardImg}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        <div className={styles.discountLabel}>
          -{Math.round(100 - (discont_price / price) * 100)}%
        </div>
        <div className={styles.cardIcons}>
          <img src={styleHeart} alt="heart" className={styles.heart} /* onClick={addFavoritesCard} */
          />
          <img src={bag} alt="bag" className={styles.shoppingBag} />
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
