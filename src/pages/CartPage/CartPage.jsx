import React from 'react'
import styles from './CartPage.module.css'
import OrderForm from '../../components/OrderForm/OrderForm'

export default function CartPage() {
  return (
    <div className={styles}>
      <OrderForm/>
    </div>
  )
}
