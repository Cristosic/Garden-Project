import React, { useEffect } from "react";
import CategoryCard from "../../CategoriesSection/CategoryCard/CategoryCard";
import styles from "./CategoriesContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../store/slices/categoriesSlice";
import { Link } from "react-router-dom";

export default function CategoriesContainer() {
  const categoriesState = useSelector(
    (state) => state.categories.categoriesData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <div className={styles.title}>
        <span>Categories</span>
        <div className={styles.line}></div>
        <Link to={`/categories`}>
          <button>All categories</button>
        </Link>
      </div>

      <div className={styles.container}>
        {
        categoriesState.slice(0, 4).map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
