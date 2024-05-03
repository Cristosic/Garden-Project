import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../media/images/Fon.jpg';
import styles from '../HeaderBanner/Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${banner})` }}>
      <h1 className={styles.title}>Amazing Discounts <br /> on Garden Products!</h1>
      <Link to="/sales" className={styles.button}>Check out</Link>
    </div>
  );
}

export default Banner;


