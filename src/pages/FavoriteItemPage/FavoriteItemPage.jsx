import React from "react";
import { useSelector } from "react-redux";
import styles from "../FavoriteItemPage/FavoriteItemPage.module.scss";
import { Link } from "react-router-dom";
import FilterFavoriteItem from "./FilterProducts/FilterProducts";
import SaleProductsCard from "../../components/SectionSale/ProductsCard/ProductsCard";

export default function FavoriteItemPage() {
  const favorites = useSelector((state) => state.favorites.card);

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

      <FilterFavoriteItem />

      {/* уже есть готовый camponents для карточек на странице MainPAge,
       поэтому я могу переиспользовать его тут */}
      {Object.values(favorites).length > 0 ? (
        <div className={styles.cardContainer}>
          {Object.values(favorites).map((el) => (
            <SaleProductsCard key={el.id} {...el} />
          ))}
        </div>
      ) : (
        <p>Нет избранных товаров</p>
      )}
    </div>
  );
}
