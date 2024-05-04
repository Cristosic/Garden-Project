import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SectionSale.module.scss";
import { getSaleProducts } from "../../store/slices/saleProductsSlice";
import SaleProductsContainer from "./SaleProductsContainer/SaleProductsContainer";
import { Link } from 'react-router-dom';

function SectionSale() {
  const dispatch = useDispatch();
  const saleProducts = useSelector(
    (state) => state.saleProducts.saleProductsData
  );

  // хук useState мне понадобится для получения 4 рандомных продуктов со скидкой,
  // что бы не трогать глобальное состояние в нашем store
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
    <div className={styles.container}>

      <div className={styles.title}>
        <span>Sale</span>

        <div className={styles.line}></div>

        <Link to={"/sales"}>
        <button>All sales</button>
        </Link>
        
      </div>

      <SaleProductsContainer saleProducts={randomSaleProducts} className={styles.productsContainer}/>
    </div>
  );
}

export default SectionSale;
