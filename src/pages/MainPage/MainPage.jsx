import React, { useState } from 'react'
import styles from "./MainPage.module.css";
import SectionSale from '../../components/SectionSale/SectionSale';
import { FormDiscount } from '../../components/DiscountForm/FormDiscount/FormDiscount';

export default function MainPage() {

  const [toggleModal] = useState(false);
  const openContentModal = () => {
    toggleModal(true);
  };

  return (
    <div className={styles}>
      <FormDiscount openContentModal={ openContentModal }/>
      <SectionSale/>
    </div>
  )
}
