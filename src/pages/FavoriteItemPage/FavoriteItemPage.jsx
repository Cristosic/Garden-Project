import React from "react";
import { useDispatch, useSelector } from "react-redux";
import bag from "../../media/icons/bag.svg";
import favoritesHeart from "../../media/icons/favoritesHeart.svg";
import { deleteCard } from "../../store/slices/favoritesSlice";
import styles from "../FavoriteItemPage/FavoriteItemPage.module.scss";
import { Link } from "react-router-dom";
import FilterFavoriteItem from "./FilterProducts/FilterProducts";


export default function FavoriteItemPage() {
  const favorites = useSelector((state) => state.favorites.card);
  const dispatch = useDispatch();

  console.log(favorites);

  return (
    <div className={styles.favoritesContainer}>
      <div className={styles.navigationLink}>
        <Link to={"/"}>
          <button>Main page</button>
        </Link>
        <div className={styles.line}></div>
        <Link to={"/favorites"}>
          <button className={styles.buttonActive}>Liked products</button>
        </Link>
      </div>

      <h1 className={styles.titlePage}>Liked products</h1>

      <FilterFavoriteItem/>

      {Object.values(favorites).length > 0 ? (
        <div className={styles.cardContainer}>
          {Object.values(favorites).map((el) => (
            <div key={el.id} className={styles.cardContent}>
              <div className={styles.cardImg}>
              <img src={`http://localhost:3333${el.image}`} alt={el.title} />
              {el.discont_price && el.discont_price < el.price && (
                  <div className={styles.discountLabel}>
                    -{Math.round(100 - (el.discont_price / el.price) * 100)}%
                  </div>
                )}
              <div className={styles.iconCard}>
                <img
                  src={favoritesHeart}
                  alt="DeleteCard"
                  onClick={() => dispatch(deleteCard({ id: el.id }))}
                />
                <img src={bag} alt="AddCardBag" />
              </div>
              </div>
              
              <h4>{el.title}</h4>
              <div className={styles.priceContainer}>
                <p>${el.price}</p>
                <p>${el.discont_price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Нет избранных товаров</p>
      )}
    </div>
  );
}
