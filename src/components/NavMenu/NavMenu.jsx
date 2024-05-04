import React from "react";
import plantLogo from "../../media/logos/plantLogo.svg";
import styles from "./NavMenu.module.css";
import heart from "../../media/icons/heart.svg";
import bag from "../../media/icons/bag.svg";
import lightThemeIcon from "../../media/icons/lightThemeIcon.svg";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <div className={styles.iconsLeft}>
        <img className={styles.plantLogo} src={plantLogo} alt="plant-logo" />
        <img
          className={styles.themeIcon}
          src={lightThemeIcon}
          alt="theme-icon"
        />
      </div>
      <button className={styles.buttonNavMenu}>1 day discount!</button>
      <div className={styles.navMenuLinks}>
        <Link to={"/"}>Main Page</Link>
        <Link to={"/categories"}>Categories</Link>
        <Link to={"/products"}>All products</Link>
        <Link to={"/sales"}>All sales</Link>
      </div>
      <div className={styles.iconsRight}>
        <img className={styles.heartIcon} src={heart} alt="heart-icon" />
        <img className={styles.cartIcon} src={bag} alt="cart-icon" />
      </div>
    </div>
  );
}
