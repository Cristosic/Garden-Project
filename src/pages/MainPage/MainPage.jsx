import React from 'react'
import styles from "./MainPage.module.css";
import HeaderBanner from '../../components/HeaderBanner/Banner';
import SectionSale from '../../components/SectionSale/SectionSale';


export default function MainPage() {
  return (
    <div className={styles}>
      <HeaderBanner/>
      <SectionSale/>
      
    </div>
  )
}
