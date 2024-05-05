import React from 'react'
import styles from "./MainPage.module.css";
import SectionSale from '../../components/SectionSale/SectionSale';
import FormDiscount from '../../components/DiscountForm/FormDiscount/FormDiscount';
import CategoriesContainer from '../../components/CategoriesSection/CategoriesContainer/CategoriesContainer';

export default function MainPage() {

  return (
    <div className={styles}>
      
      <CategoriesContainer />
<FormDiscount />
      <SectionSale/>
    </div>
  )
}
