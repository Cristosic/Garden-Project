import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import styles from "./SingleProductPage.module.css";
import { serverUrl } from '../../utils/Config';
import ProductCounter from '../../components/ProductCounter/ProductCounter';

const SingleProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();

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
          <div className={styles.addToCartContainer}>
            <ProductCounter quantity={quantity} setQuantity={setQuantity} />
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

