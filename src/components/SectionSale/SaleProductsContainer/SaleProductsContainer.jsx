import React from "react";
import styles from "../SaleProductsContainer/SaleProductsContainer.module.scss";
import SaleProductsCard from "../SaleProductsCard/SaleProductsCard";

function SaleProductsContainer({ saleProducts }) {
  return (
    <div>
      <div className={styles.cardSale}>
        {saleProducts.map((el) => (
          <SaleProductsCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default SaleProductsContainer;
