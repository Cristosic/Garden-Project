import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SectionSale.module.scss";
import { getAllProducts } from "../../store/slices/allProductsSlice";
import SaleProductsContainer from "./SaleProductsContainer/SaleProductsContainer";
import { Link } from "react-router-dom";
import filterSaleProducts from "../../utils/filterSaleProducts";

function SectionSale() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.allProductsData);

  // хук useState мне понадобится для получения 4 рандомных продуктов,
  // что бы не трогать глобальное состояние в нашем store
  const [randomSaleProducts, setRandomSaleProducts] = useState([]);

  const productsAllSale = filterSaleProducts(products);

  console.log(productsAllSale);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const randomProducts = productsAllSale.sort(() => 0.5 - Math.random());
      setRandomSaleProducts(randomProducts.slice(0, 4));
    }
  }, [products]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Sale</span>

        <div className={styles.line}></div>

        <Link to={"/sales"}>
          <button>All sales</button>
        </Link>
      </div>

      <SaleProductsContainer
        saleProducts={randomSaleProducts}
        className={styles.productsContainer}
      />

      <div className={styles.contanerButtonNone}>
        <Link to={"/sales"}>
          <button className={styles.buttonForIphone}>All sales</button>
        </Link>
      </div>
    </div>
  );
}

export default SectionSale;
