import React from 'react'
import styles from "./NotFoundPage.module.css";
import four from '../../media/images/fourNotFound.svg'
import zero from '../../media/images/zeroNotFound.svg'
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {

  const navigate = useNavigate();
 
 
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.containerNotFound}>
        <img className={styles.four} src={four} alt="4" />
        <img className={styles.zero} src={zero} alt="0" />
        <img className={styles.four} src={four} alt="4" />
      </div>
      <div className={styles.messageContainer}>
        <h4>Page Not Found</h4>
        <p>
          We’re sorry, the page you requested could not be found. <br /> Please
          go back to the homepage.
        </p>
        <button onClick={() => {navigate("/") }}> Go Home </button>
      </div>
    </div>
  );
}
