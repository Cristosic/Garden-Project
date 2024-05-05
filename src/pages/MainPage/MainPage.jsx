import React from 'react'
import styles from "./MainPage.module.css";
import Banner from '../../components/HeaderBanner/Banner';
import SectionSale from '../../components/SectionSale/SectionSale';
import CategoriesContainer from '../../components/CategoriesSection/CategoriesContainer/CategoriesContainer';

export default function MainPage() {
  return (
    <div className={styles}>
      <Banner />
      <CategoriesContainer />
      <SectionSale />
    </div>
  )
}
