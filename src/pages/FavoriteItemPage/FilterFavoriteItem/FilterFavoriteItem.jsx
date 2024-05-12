import React from "react";
import styles from "../FilterFavoriteItem/FilterFavoriteItem.module.scss";
import arrowDown from "../../../media/images/ArrowDown.svg" 

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
        <select name="sortSelect"  className={styles.select} style={{ backgroundImage: `url(${arrowDown})` }}>
                <option value="default">by default</option>
                <option value="newest">Newest</option>
                <option value="price-high-low">Price: High-Low</option>
                <option value="price-low-high">Price: Low-High</option>
            </select>
    
      </div>
    </div>
  );
}

export default FilterFavoriteItem;
