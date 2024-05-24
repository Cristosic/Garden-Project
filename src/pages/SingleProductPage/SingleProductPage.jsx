import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchProductDetails } from '../../store/slices/oneProductSlice';
import { addToCart, addToFavorites } from '../../utils/cartUtils';
import styles from "./SingleProductPage.module.css";

const SingleProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, status, error } = useSelector((state) => state.oneProduct);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert('Product added to cart!');
  };

  const handleAddToFavorites = () => {
    addToFavorites(product);
    alert('Product added to favorites!');
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  const currentPrice = product.discont_price
    ? Math.round(product.discont_price)
    : Math.round(product.price);

  const discountPercentage = product.discont_price
    ? Math.round(100 - (product.discont_price / product.price) * 100)
    : null;

  return (
    <div className={styles.singleProductPage}>
      <div className={styles.navigationLink}>
        <Link to="/">
          <button className={styles.navigationButton}>Main page</button>
        </Link>
        <div className={styles.line}></div>
        <Link to="/categories">
          <button className={styles.navigationButton}>Categories</button>
        </Link>
        <div className={styles.line}></div>
        <Link to="/categories/tools-and-equipment">
          <button className={styles.navigationButton}>Tools and equipment</button>
        </Link>
        <div className={styles.line}></div>
        <button className={`${styles.navigationButton} ${styles.buttonActive}`}>{product.title}</button>
      </div>
      <div className={styles.productWrapper}>
        <img className={styles.productImage} src={`http://localhost:3333/${product.image}`} alt={product.title} />
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <div className={styles.priceSection}>
            <span className={styles.currentPrice}>
              ${currentPrice}
            </span>
            {product.discont_price && (
              <>
                <span className={styles.oldPrice}>${Math.round(product.price)}</span>
                <span className={styles.discount}>
                  -{discountPercentage}%
                </span>
              </>
            )}
          </div>
          <div className={styles.quantityContainer}>
            <button className={styles.quantityButton} onClick={handleDecrement}>-</button>
            <span className={styles.quantity}>{quantity}</span>
            <button className={styles.quantityButton} onClick={handleIncrement}>+</button>
            <button className={styles.addToCartButton} onClick={handleAddToCart}>Add to cart</button>
          </div>
          <div className={styles.productDescription}>
            <h2>Description</h2>
            <p>{product.description}</p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
