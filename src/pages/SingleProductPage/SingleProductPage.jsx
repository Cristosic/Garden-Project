import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import styles from "./SingleProductPage.module.css";
import { serverUrl } from '../../utils/config.js';
import Counter from '../../components/Counter/Counter';
import heartIcon from "../../media/icons/heartIcon.svg";
import favoritesHeart from "../../media/icons/favoritesHeart.svg";
import hoverHeart from "../../media/icons/hoverHeart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addCard, deleteCard } from "../../store/slices/favoritesSlice";
import { Context } from "../../context";

const SingleProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const { theme } = useContext(Context);
  const dispatch = useDispatch();
  const cardFavorites = useSelector(state => state.favorites.cards.find(el => el.id === productId));
  const [isFavorite, setIsFavorite] = useState(!!cardFavorites);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${serverUrl}products/${productId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setProduct(data[0]);
        } else {
          setProduct(data);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleAddToCart = () => {
    alert('Product added to cart!');
  };

  const addFavoritesCard = (event) => {
    event.stopPropagation(); // Остановка 
    if (isFavorite) {
      dispatch(deleteCard({ id: productId }));
    } else {
      dispatch(addCard({ id: productId, ...product }));
    }
    setIsFavorite(!isFavorite); // Переключение состояния избранного
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  const previousPage = location.state?.from || "/";
  const previousPageName = location.state?.pageName || "Previous Page";

  return (
    <div className={styles.singleProductPage}>
      <div className={styles.navigationLink}>
        <Link to="/">
          <button>Main Page</button>
        </Link>
        <div className={styles.line}></div>
        <Link to={previousPage}>
          <button>{previousPageName}</button>
        </Link>
        <div className={styles.line}></div>
        <button className={styles.buttonActive}>{product.title}</button>
      </div>
      <div className={styles.productWrapper}>
        <img className={styles.productImage} src={`${serverUrl}${product.image}`} alt={product.title} />
        <div className={styles.productInfo}>
          {/*  добавление сердцаааааа */}
          <img
            src={isFavorite ? favoritesHeart : heartIcon}
            alt="heart"
            className={`${styles.heart} ${isFavorite ? styles.favorite : ''}`}
            onClick={addFavoritesCard}
            onMouseOver={e => e.currentTarget.src = hoverHeart}
            onMouseOut={e => e.currentTarget.src = isFavorite ? favoritesHeart : heartIcon}
          />
        
          <h1 className={styles.productTitle}>{product.title}</h1>
          <div className={styles.priceSection}>
            {product.discont_price && product.discont_price < product.price ? (
              <>
                <span className={styles.currentPrice}>${Math.round(product.discont_price)}</span>
                <span className={styles.oldPrice}>${Math.round(product.price)}</span>
                <span className={styles.discount}>
                  -{Math.round(100 - (product.discont_price / product.price) * 100)}%
                </span>
              </>
            ) : (
              <span className={styles.currentPrice}>${product.price}</span>
            )}
          </div>
          <div  className={styles.addToCartContainer}>
            <Counter />
            <div className={styles.containertButtonCart}  >
            <button className={styles.addToCartButton} onClick={handleAddToCart}>Add to cart</button>
            </div>
          
          </div>
          <div className={styles.productDescription}>
            <h2>Description</h2>
            <p>{product.description}</p>
            <a href="#" className={styles.readMoreLink}>Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
