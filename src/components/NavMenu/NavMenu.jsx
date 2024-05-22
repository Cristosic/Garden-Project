import React, { useState } from "react";
import plantLogo from "../../media/logos/plantLogo.svg";
import styles from "./NavMenu.module.css";
import heart from "../../media/icons/heart.svg";
import bag from "../../media/icons/bag.svg";
import lightThemeIcon from "../../media/icons/lightThemeIcon.svg";
import burgerMenuIcon from "../../media/icons/burgerMenuIcon.svg";
import crossIcon from "../../media/icons/crossIcon.svg";
import { Link } from "react-router-dom";

export default function NavMenu() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navMenu}>
      <div className={styles.iconsLeft}>
        <img 
          className={styles.plantLogo} 
          src={plantLogo} 
          alt="plant-logo" />
        <img
          className={styles.themeIcon}
          src={lightThemeIcon}
          alt="theme-icon"
        />
      </div>
      <div
        className={
          isOpen
            ? [styles.modalNavMenu, styles.active].join(" ")
            : [styles.modalNavMenu]
        }
        onClick={() => setIsOpen(false)}
        // при клике вне выпадающего меню, закрывается бургер-меню
      >
        <div
          className={
            isOpen
              ? [styles.navBarCenter, styles.active].join(" ")
              : [styles.navBarCenter]
          }
        >
          <div className={styles.navMenuLinks}>
            <Link to={"/"} onClick={() => setIsOpen(false)}>
              Main Page
            </Link>
            <Link to={"/categories"} onClick={() => setIsOpen(false)}>
              Categories
            </Link>
            <Link to={"/products"} onClick={() => setIsOpen(false)}>
              All products
            </Link>
            <Link to={"/sales"} onClick={() => setIsOpen(false)}>
              All sales
            </Link>
          </div>
          <div className={styles.buttonNavMenu}>
            <button>1 day discount!</button>
          </div>
        </div>
      </div>
      <div className={styles.iconsRight}>
        <Link to={"/favorites"}>
          <img className={styles.heartIcon} src={heart} alt="heart-icon" />
        </Link>
        <Link to={"/cart"}>
          <img className={styles.cartIcon} src={bag} alt="cart-icon" />
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={styles.burgerMenuIcon}
        >
          {isOpen ? (
            <img
              className={styles.crossIcon}
              src={crossIcon}
              alt="cross-icon"
            />
          ) : (
            <img
              className={styles.burgerMenuIcon}
              src={burgerMenuIcon}
              alt="burger-icon"
            />
          )}
        </div>
      </div>
    </div>
  );
}
