import React, { useContext, useEffect, useState } from "react";
import styles from "./PopUpOneDayDiscount.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import ProductsCard from "../ProductsCard/ProductsCard";
import { useSelector } from "react-redux";
import { Context } from "../../context";

export default function PopUpOneDayDiscount({
  oneDayDiscountIsOpen,
  setOneDayDiscountIsOpen,
}) {
  
  const { theme } = useContext(Context);

  const products = useSelector((state) => state.allProducts.allProductsData);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const day = new Date().getDate();
      const productIndex = day % products.length;
      const selectedProduct = products[productIndex];
      setProduct({
        ...selectedProduct,
        discont_price: (selectedProduct.price / 2).toFixed(2),
      });
    }
  }, [products]);

  return (
    <div
      className={`${styles.popUpContainer} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >
      <ModalWindow
        cardContentStyles={styles.cardContentStyles}
        isOpen={oneDayDiscountIsOpen}
        isClosed={() => setOneDayDiscountIsOpen(false)}
      >
        <div className={styles.modalWindowContent}>
          <h3>50% discount on product of the day!</h3>
          {product && (
            <ProductsCard
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              discont_price={product.discont_price}
              hideCartIcon={true}
            />
          )}
          <button className={styles.addToCartButton}>Add to cart</button>
        </div>
      </ModalWindow>
    </div>
  );
}
