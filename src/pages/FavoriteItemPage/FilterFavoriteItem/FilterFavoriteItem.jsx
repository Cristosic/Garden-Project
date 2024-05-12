import React from "react";
import styles from "../FilterFavoriteItem/FilterFavoriteItem.module.scss";


function FilterFavoriteItem() {
  
  return (
    <div className={styles.filterContainer}>
      <div className={styles.priceInputs}>
        <label htmlFor="priceFrom">Price</label>
        <input type="number" id="priceFrom" name="priceFrom" placeholder="from" />
        <input type="number" id="priceTo" name="priceTo" placeholder="to" />
      </div>

      <div className={styles.sortContainer}>
        <label htmlFor="sortSelect">Sorted</label>
        <select name="sortSelect"  style={{ width: '200px', display: 'block', padding:"8px 8px 8px 16px" }}>
                <option value="default">By default</option>
                <option value="newest">Newest</option>
                <option value="price-high-low">Price: High-Low</option>
                <option value="price-low-high">Price: Low-High</option>
            </select>
    
      </div>
    </div>
  );
}

export default FilterFavoriteItem;
