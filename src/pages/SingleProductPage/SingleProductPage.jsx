import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import styles from "./SingleProductPage.module.css";
import { serverUrl } from "../../utils/config.js";
import Counter from "../../components/Counter/Counter";
import heartIcon from "../../media/icons/heartIcon.svg";
import favoritesHeart from "../../media/icons/favoritesHeart.svg";
import hoverHeart from "../../media/icons/hoverHeart.svg";
import darkHeartIcon from "../../media/icons/darkHeartIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { addCard, deleteCard } from "../../store/slices/favoritesSlice";
import { Context } from "../../context";
import ModalWindow from "./../../components/ModalWindow/ModalWindow";
import { addInCart, deleteOutCart } from "../../store/slices/cartProductsSlice";
import {
  getSingleProduct,
  resetCounter,
} from "../../store/slices/singleProductsSlice";
import { getOneCategory } from "../../store/slices/oneCategorySlice";


const SingleProductPage = () => {
  const { productId } = useParams();
  const location = useLocation();
  const { theme } = useContext(Context);
  const dispatch = useDispatch();

  const product = useSelector((state) => state.singleProduct.product);

  const cardFavorites = useSelector((state) =>
    state.favorites.cards.find((el) => el.id === productId)
  );
  const productInCart = useSelector((state) =>
    state.cart.products.find((el) => el.id === productId)
  );

  const [isFavorite, setIsFavorite] = useState(!!cardFavorites);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const categoryId = product ? product.categoryId : null;
  const category = useSelector((state) => state.oneCategory.oneCategoriesData);

  const [modalActive, setModalActive] = useState(false);

  // состояние, которое используется для изменения текста в кнопке, используя setTimeout.
  const [buttonText, setButtonText] = useState("Add to cart");


  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (categoryId) {
      dispatch(getOneCategory(categoryId));
    }
  }, [dispatch, categoryId]);


  const addFavoritesCard = (event) => {
    event.stopPropagation();

    if (isFavorite) {
      dispatch(deleteCard({ id: productId }));
    } else {
      dispatch(addCard({ id: productId, ...product }));
    }
    setIsFavorite(!isFavorite);
  };

  const addProductsInCart = (e) => {
    e.stopPropagation();
    if (productInCart) {
      dispatch(deleteOutCart({ id: productId }));
      setButtonText("Add to cart");
    } else {

      dispatch(
        addInCart({ id: productId, ...product, amount: product.amount })
      );
      dispatch(resetCounter());
      setButtonText("Added");
      setTimeout(() => {
        setButtonText("Add to cart");
<<<<<<< Liuba/Styles_single_product_page
      }, 1000);
=======
      }, 1000)

>>>>>>> dev
    }
  };

  const handleImageClick = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const displayedDescription =
    product && product.description
      ? showFullDescription
        ? product.description
        : product.description.slice(
            0,
            Math.ceil(product.description.length / 2)
          ) + (showFullDescription ? "" : "...")
      : "";
  if (!product) {
    return <p>Loading...</p>;
  }

  const previousPage = location.state?.from || "/";
  const previousPageName = location.state?.pageName || "Previous Page";

  return (
    <div
      className={`${styles.singleProductPage} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >

      <div className={styles.navigationLink}>

        <Link to="/">
          <button>Main Page</button>
        </Link>
        <div className={styles.line}></div>
        <Link to={previousPage}>
          <button>{previousPageName}</button>
        </Link>
        <div className={styles.line}></div>

        <Link to={`/categories/${categoryId}`}>
          <button className={styles.buttonActive}>
            {category?.category?.title || "Loading..."}
          </button>
          <button className={styles.buttonActive}>
            {category?.category?.title || "Loading..."}
          </button>
        </Link>
        <div className={styles.line}></div>


        <button className={styles.buttonActive}>{product.title}</button>
      </div>

      <div className={styles.productWrapper}>
<<<<<<< Liuba/Styles_single_product_page
        <div className={styles.productImageContainer}>
=======
        <img
          className={styles.productImage}
          src={`${serverUrl}${product.image}`}
          alt={product.title}
          onClick={handleImageClick}
        />
        <div className={styles.productInfo}>

>>>>>>> dev
          <img
            className={styles.productImage}
            src={`${serverUrl}${product.image}`}
            alt={product.title}
            onClick={handleImageClick}
          />
<<<<<<< Liuba/Styles_single_product_page
        </div>
        <div className={styles.containerTitle}>
          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <img
              src={
                isFavorite
                  ? favoritesHeart
                  : theme === "dark"
                  ? darkHeartIcon
                  : heartIcon
              }
              alt="heart"
              className={`${styles.heart} ${isFavorite ? styles.favorite : ""}`}
              onClick={addFavoritesCard}
              onMouseOver={(e) =>
                (e.currentTarget.src =
                  theme === "dark" ? favoritesHeart : hoverHeart)
              }
              onMouseOut={(e) =>
                (e.currentTarget.src = isFavorite
                  ? favoritesHeart
                  : theme === "dark"
                  ? darkHeartIcon
                  : heartIcon)
              }
            />
          </div>
=======
          
          <h1 className={styles.productTitle}>{product.title}</h1>
>>>>>>> dev

          <div className={styles.priceSection}>
            {product.discont_price && product.discont_price < product.price ? (
              <>
                <span className={styles.currentPrice}>
                  ${Math.round(product.discont_price)}
                </span>
                <span className={styles.oldPrice}>
                  ${Math.round(product.price)}
                </span>
                <span className={styles.discount}>
                  -
                  {Math.round(
                    100 - (product.discont_price / product.price) * 100
                  )}
                  % -
                  {Math.round(
                    100 - (product.discont_price / product.price) * 100
                  )}
                  %
                </span>
              </>
            ) : (
              <span className={styles.currentPrice}>${product.price}</span>
            )}
          </div>

          <div className={styles.addToCartContainer}>
            <Counter productId={productId} isSingleProduct={true} />
            <div className={styles.containertButtonCart}>
              <button
                className={`${styles.addToCartButton} ${
                  buttonText === "Added" ? styles.addedButton : ""
                }`}
                onClick={addProductsInCart}
              >
                {buttonText}
              </button>
            </div>
          </div>
<<<<<<< Liuba/Styles_single_product_page
        </div>
        <div className={styles.productDescription}>
          <h2>Description</h2>
          <p
            className={`${styles.descriptionText} ${
              showFullDescription ? styles.expanded : styles.collapsed
            }`}
          >
            {displayedDescription}
          </p>
          <button
            className={styles.readMoreButton}
            onClick={(e) => {
              e.preventDefault();
              toggleDescription();
            }}
          >
            {showFullDescription ? "Show less" : "Read more"}
          </button>
=======

          <div className={styles.productDescription}>
            <h2>Description</h2>
            <p>{product.description}</p>
            <button className={styles.readMoreLink}>
              Read me
            </button>
          </div>
>>>>>>> dev
        </div>
      </div>

      <ModalWindow
        isOpen={modalActive}
        isClosed={closeModal}
        imageModalContent={styles.imageModalContent}
      >
        <div>
          {
            <img
              src={`${serverUrl}${product.image}`}
              alt={`${product.title}`}
              className={styles.modalImage}
            />
          }
        </div>
      </ModalWindow>
    </div>
  );
};


export default SingleProductPage;
