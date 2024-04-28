import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import styles from "./SectionSale.module.scss";
import { dataSaleProducts } from "../../DataBase/dataSaleProducts";

function SectionSale() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.saleProducts);

  useEffect(() => {
    dispatch(dataSaleProducts());
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}>

        <div className={styles.title}>
          <span>Sale</span>
          <div className={styles.line}></div>
          <div>All sales</div>
        </div>
        
        <div className={styles.cardSale}>
          {products.map((el) => (
            <div key={el.id} className={styles.cardContent}>
              <div className={styles.cardImg}>
                <img src={el.image} alt={el.title} />
                <div className={styles.discountLabel}>
                  -{Math.round(100 - (el.discont_price / el.price) * 100)}%
                </div>

                <div className={styles.cardIcons}>
                  <FiHeart className={styles.heart}/>
                  <HiOutlineShoppingBag className={styles.shoppingBag}/>
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
      </div>
    </>
  );
}

export default SectionSale;
