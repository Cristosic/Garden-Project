import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SectionSale.module.scss";
import { getSaleProducts } from "../../store/slices/saleProductsSlice";
import SaleProductsContainer from "./SaleProductsContainer/SaleProductsContainer";

function SectionSale() {
  const dispatch = useDispatch();
  const saleProducts = useSelector(
    (state) => state.saleProducts.saleProductsData
  );
  const [randomSaleProducts, setRandomSaleProducts] = useState([]);

  useEffect(() => {
    dispatch(getSaleProducts());
  }, [dispatch]);

  useEffect(() => {
    if (saleProducts.length > 0) {
      const randomProducts = [...saleProducts].sort(() => 0.5 - Math.random());
      setRandomSaleProducts(randomProducts.slice(0, 4));
    }
  }, [saleProducts]);

  return (
    <div>
      <div className={styles.title}>
        <span>Sale</span>
        <div className={styles.line}></div>
        <button>All sales</button>
      </div>
      <SaleProductsContainer saleProducts={randomSaleProducts} />
    </div>
  );
}

export default SectionSale;
