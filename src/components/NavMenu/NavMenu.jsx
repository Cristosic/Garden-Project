import React, { useContext, useState } from "react";
import plantLogo from "../../media/logos/plantLogo.svg";
import styles from "./NavMenu.module.css";
import heartIcon from "../../media/icons/heartIcon.svg";
import darkHeartIcon from "../../media/icons/darkHeartIcon.svg";
import cartIcon from "../../media/icons/cartIcon.svg";
import darkCartIcon from "../../media/icons/darkCartIcon.svg";
import burgerMenuIcon from "../../media/icons/burgerMenuIcon.svg";
import darkBurgerIcon from "../../media/icons/darkBurgerIcon.svg";
import crossIcon from "../../media/icons/crossIcon.svg";
import darkCrossIcon from "../../media/icons/darkCrossIcon.svg";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Context } from "../../context";

export default function NavMenu() {

  const { theme } = useContext(Context)

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.navMenu} ${
        theme === "light" ? styles.lightTheme : styles.darkTheme
      }`}
    >
      <div className={styles.iconsLeft}>
        <img className={styles.plantLogo} src={plantLogo} alt="plant-logo" />
        <ThemeToggle className={styles.themeToggle} />
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
          <img
            className={styles.heartIcon}
            src={theme === "light" ? heartIcon : darkHeartIcon}
            alt="heart-icon"
          />
        </Link>
        <Link to={"/cart"}>
          <img
            className={styles.cartIcon}
            src={theme === "light" ? cartIcon : darkCartIcon}
            alt="cart-icon"
          />
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={styles.burgerMenuIcon}
        >
          {isOpen ? (
            <img
              className={styles.crossIcon}
              src={theme === "light" ? crossIcon : darkCrossIcon}
              alt="cross-icon"
            />
          ) : (
            <img
              className={styles.burgerMenuIcon}
              src={theme === "light" ? burgerMenuIcon : darkBurgerIcon}
              alt="burger-icon"
            />
          )}
        </div>
      </div>
    </div>
  );
}
