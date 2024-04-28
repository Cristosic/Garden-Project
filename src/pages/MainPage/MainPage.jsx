import React from 'react'
import styles from "./MainPage.module.css";
import SectionSale from '../../components/SectionSale/SectionSale';

export default function MainPage() {
  return (
    <div className={styles}>
      <SectionSale/>
    </div>
  )
}
