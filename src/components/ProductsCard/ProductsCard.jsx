import styles from "./ProductsCard.module.scss";
import heartIcon from "../../media/icons/heartIcon.svg";
import cartIcon from "../../media/icons/cartIcon.svg";
import favoritesHeart from "../../media/icons/favoritesHeart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addCard, deleteCard } from "../../store/slices/favoritesSlice";
import { useContext } from "react";
import { Context } from "../../context";
// Начало Вадим
import { Link, useLocation } from "react-router-dom";
// Конец Вадим

function ProductsCard({ id, title, image, price, discont_price, hideCartIcon }) {

  const { theme } = useContext(Context);

  // Начало Вадим
  const location = useLocation();
  // Конец Вадим

  const dispatch = useDispatch();
  const cardFavorites = useSelector((state) =>
    state.favorites.cards.find((el) => el.id === id)
  );

  const styleHeart = cardFavorites ? favoritesHeart : heartIcon;


  // сначала проверяю есть ли в массиве обьект с таким id,
  // если есть тогда удаляем - иначе добовляем его

  // Начало Вадим: добавление event.stopPropagation для избежания конфликта кликов
  const addFavoritesCard = (event) => {
    event.stopPropagation(); // Остановка 
    if (cardFavorites) {
      dispatch(deleteCard({ id }));
    } else {
      dispatch(addCard({ id, title, image, price, discont_price }));
    }
  };

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Остановка
    // Лог добавления в корзину
    console.log("Added to cart");
  };
  // Конец Вадим

  // Начало Вадим
  // Ставлю локацию для клика для перехода по этим страницам
  const getPageName = () => {
    if (location.pathname.includes("categories")) return "Categories";
    if (location.pathname.includes("products")) return "All products";
    if (location.pathname.includes("sales")) return "All sales";
    return "Page";
  };
  // Конец Вадим

  return (
    <div
      className={`${styles.cardContent} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >
      <div className={styles.card}>
        {/* Полностью измененяю структуры Link */}
        <Link
          to={`/product/${id}`}
          state={{ from: location.pathname, pageName: getPageName() }}
          className={styles.cardLink}
        >
          <img
            src={`http://localhost:3333${image}`}
            alt={title}
            className={styles.cardImg}
          />
          {discont_price && discont_price < price && (
            <div className={styles.discountLabel}>
              -{Math.round(100 - (discont_price / price) * 100)}%
            </div>
          )}
        </Link>
        {/* Конец  */}
        <div className={styles.cardIcons}>
          <img
            src={styleHeart}
            alt="heart"
            className={styles.heart}
            onClick={addFavoritesCard}
          />
          {!hideCartIcon && (
            <img src={cartIcon} alt="bag" className={styles.shoppingBag} onClick={handleAddToCart}/>
          )}
        </div>
      </div>

      <h4>{title}</h4>
      <div className={styles.priceContainer}>
        {discont_price && discont_price < price ? (
          <>
            <p className={styles.discountPrice}>${Math.round(discont_price)}</p>
            <p className={styles.noDiscountPrice}>${Math.round(price)}</p>
          </>
        ) : (
          <p className={styles.originalPrice}>${Math.round(price)}</p>
        )}
      </div>
    </div>
  );
}

export default ProductsCard;