import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../media/images/banner.svg';
import styles from '../HeaderBanner/Banner.module.css';

const Banner = () => {
  return (


    <div className={styles.banner} >
      <div>
        <img className={styles.headerimg} src={banner} alt="" />
      </div>
      <div className=''></div>
      <h1 className={styles.title}>Amazing Discounts <br /> on Garden Products!</h1>
      <Link to="/sales" className={styles.button}>Check out</Link>
    </div>
  );
}

export default Banner;