import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import OrderForm from "../../components/OrderForm/OrderForm";
import { deleteOutCart } from "../../store/slices/cartProductsSlice";
import styles from "./CartPage.module.scss";
import Counter from '../../components/Counter/Counter';
import crossIcon from "../../media/icons/crossIcon.svg";

export default function CartPage() {
  const dispatch = useDispatch();
  const basketCart = useSelector((state) => state.cart.products || []);
  const isCartEmpty = basketCart.length === 0;

  const deleteProductOutCart = (id) => {
    dispatch(deleteOutCart({ id }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.cartPage}>
        <h1 className={styles.titlePage}>Shopping cart</h1>
        <div className={styles.line}></div>
        <Link to={"/"}>
          <button className={styles.buttonActive}>Back to the store</button>
        </Link>
      </div>
      
      {isCartEmpty ? (
        <div>
          <p className={styles.text}>
            Looks like you have no items in your basket currently.
          </p>
          <Link to={"/products"}>
            <button className={styles.btn}>Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div className={styles.cartContainer}>
          <div>
            {basketCart.map((el) => (
              <div key={el.id} className={styles.cartItem}>
                <div className={styles.cartItemDetails}>
                  <div className={styles.cartItemImg}>
                    <img
                      src={`http://localhost:3333${el.image}`}
                      alt={el.title}
                      className={styles.cartItemImage}
                    />
                  </div>
                  <div className={styles.cartItemContent}>
                    <h4>{el.title}</h4>
                    <div className={styles.cartItemPrice}>
                      <Counter productId={el.id} isSingleProduct={false} />
                      <div className={styles.priceContainer}>
                        <p>${Math.round(el.price)}</p>
                        {el.discont_price && <p className={styles.discontPrice}>${Math.round(el.discont_price)}</p>}
                      </div>
                    </div>
                  </div>
                  <img 
                    src={crossIcon} 
                    alt="crossIcon" 
                    className={styles.removeButton}
                    onClick={() => deleteProductOutCart(el.id)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.formOrderContainer}>
            <OrderForm />
          </div>
        </div>
      )}
    </div>
  );
}
