// import React, { useEffect } from 'react'
// import styles from './AllProductsPage.module.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllProducts } from '../../store/slices/allProductsSlice';
// import ProductsCard from '../../components/ProductsCard/ProductsCard';

// export default function AllProductsPage() {
//   const dispatch = useDispatch()
//   const products = useSelector(state => state.allProducts.allProductsData)
//   useEffect(() => {
//     dispatch(getAllProducts())

//   }, [])
//   return (
//     <div className={styles}>
//       <div className={styles.cardContainer} >


//         {
//           products && products.map(el => <ProductsCard key={el.id} {...el} />)
//         }
//       </div>

//     </div>
//   )
// }



import React, { useEffect, useState } from "react";
import styles from "./AllProductsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/allProductsSlice";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import { Link } from "react-router-dom";
import FilterProducts from "../../components/AllFilterProduct/AllFilterProducts";

export default function AllProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.filterProductsData); // Используем filterProductsData
  const [showDiscounted, setShowDiscounted] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const toggleDiscounted = () => {
    setShowDiscounted(prevState => !prevState);
  };


  console.log("All products: ", products);

  const filteredProducts = showDiscounted
    ? products.filter(product => product.discont_price && product.discont_price < product.price)
    : products;


  console.log("Filtered products: ", filteredProducts);

  return (
    <div className={styles.saleProductsContainer}>
      <div className={styles.navigationLink}>
        <Link to={"/"}>
          <button>Main page</button>
        </Link>
        <div className={styles.line}></div>
        <Link to={"/products"}>
          <button className={styles.buttonActive}>All products</button>
        </Link>
      </div>

      <h1 className={styles.titlePage}>All products</h1>
      <FilterProducts />

      <div className={styles.discountToggle}>
        <label>
          Discounted items 
          <input type="checkbox" checked={showDiscounted} onChange={toggleDiscounted} />
        </label>
      </div>

      <div className={styles.cardContainer}>
        {filteredProducts &&
          filteredProducts.map((el) => <ProductsCard key={el.id} {...el} />)}
      </div>
    </div>
  );
}


 {/* <div className={styles.discountToggle}>
        <label>
          Discounted items 
          <input type="checkbox" checked={showDiscounted} onChange={toggleDiscounted} />
        </label>
      </div> */}