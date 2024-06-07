import React, { useContext } from "react";
import styles from "./CartPage.module.css";
import OrderForm from "../../components/OrderForm/OrderForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteOutCart } from "../../store/slices/cartProductsSlice";
import Counter from "../../components/Counter/Counter";
import { RxCross2 } from "react-icons/rx";
import { Context } from "../../context";

export default function CartPage() {

  const { theme } = useContext(Context);

  const dispatch = useDispatch();

  const basketCart = useSelector((state) => state.cart?.products || []);
  const isCartEmpty = basketCart.length === 0;

  const deleteProductOutCart = (id) => {
    dispatch(deleteOutCart({ id }));
  };

  return (
    <div
      className={`${styles.container} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >
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
                      <Counter productId={el.id} />

                      <div className={styles.priceContainer}>
                        <p className={styles.price}>${Math.round(el.price)}</p>
                        {el.discont_price && (
                          <p className={styles.discontPrice}>
                            ${Math.round(el.discont_price)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <RxCross2
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
