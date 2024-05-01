import React from 'react'
import styles from "./MainPage.module.css";
import SectionSale from '../../components/SectionSale/SectionSale';
import { FormDiscount } from '../../components/DiscountForm/FormDiscount/FormDiscount';

export default function MainPage() {
  return (
    <div className={styles}>
      <FormDiscount/>
      <SectionSale/>
    </div>
  )
}
