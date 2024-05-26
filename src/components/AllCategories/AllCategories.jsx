import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./../../store/slices/categoriesSlice";
import { Link, useParams } from "react-router-dom";
import styles from "./AllCategories.module.css";
import CategoryCard from "../CategoriesSection/CategoryCard/CategoryCard";
import { Context } from "../../context";

export default function AllCategories() {

  const { theme } = useContext(Context);

  const dispatch = useDispatch();
  const {categoryId} = useParams()

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categoriesState = useSelector(
    (state) => state.categories.categoriesData
  );

  
  return (
    <div
      className={`${styles.categories_container} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >
      <div className={styles.btn_links_categoriesPage}>
        <Link to={`/`}>
          <button className={styles.btn_category_card}>Main page</button>
        </Link>

        <div className={styles.line}></div>

        <Link to={`/categories`}>
          <button className={`${styles.btn_category_card} ${styles.active}`}>
            Categories
          </button>
        </Link>
      </div>
      <span>Categories</span>

      <Link to={`/categories/${categoryId}`}>
      <div className={styles.containerImg}>
        {categoriesState.map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
      </Link>
    </div>
  );
}
