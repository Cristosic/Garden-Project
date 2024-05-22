import React, { useEffect } from "react";
import styles from "./FilterProducts.module.scss";
import arrowDown from "../../media/images/ArrowDown.svg";
import { useDispatch } from "react-redux";
import { filterPriceAction, sortProductsAction } from "../../store/slices/allProductsSlice";

function FilterProducts() {
  const dispatch = useDispatch();

  const filter = (e) => {
    e.preventDefault();

    const { priceFrom, priceTo } = e.target;

    const priceFilter = {
      min_price: priceFrom.value || 0,
      max_price: priceTo.value || Infinity,
    };

   dispatch(filterPriceAction(priceFilter))
    e.target.reset();
  };

  return (
    <div className={styles.filterContainer}>
      <form className={styles.priceInputs} onSubmit={filter}>
        <label htmlFor="priceFrom">Price</label>
        <input
          type="number"
          id="priceFrom"
          name="priceFrom"
          placeholder="from"
        />
        <input type="number" id="priceTo" name="priceTo" placeholder="to" />
        <button className={styles.filterButton} type="submit"></button>
      </form>
      <div className={styles.sortContainer}>
        <label htmlFor="sortSelect">Sorted</label>
        <select
          name="sortSelect"
          className={styles.select}
          style={{ backgroundImage: `url(${arrowDown})` }}
          onChange={(e)=> dispatch(sortProductsAction(e.target.value))}
        >
          <option value="default">by default</option>
          <option value="newest">Newest</option>
          <option value="price-high-low">Price: High-Low</option>
          <option value="price-low-high">Price: Low-High</option>
        </select>
      </div>
    </div>
  );
}

export default FilterProducts;
