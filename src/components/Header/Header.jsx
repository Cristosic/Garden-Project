import React from "react";
import styles from "./Header.module.scss";
import banner from "../../media/images/banner.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={styles.banner}>
      <img className={styles.headerImg} src={banner} alt="garden-image" />

      <div className={styles.headerContent}>
        <h1 className={styles.title}>Amazing Discounts on Garden Products!</h1>
        <div>
          <Link to="/sales">
            <button className={styles.button}>Check out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
