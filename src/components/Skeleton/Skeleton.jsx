import React from "react";
import styles from "../Skeleton/Skeleton.module.css";
import { useSelector } from "react-redux";
import renderSkeletonSquares from "./../../utils/renderSkeletonSquares";

const Skeleton = () => {
  const loading = useSelector((state) => state.allProducts.status) === "loading";
  console.log('Loading state in Skeleton:',loading)

  if (loading) {
    return (
      <div className={styles["skeleton-container"]}>
        <div className={styles["skeleton-grid"]}>
          {renderSkeletonSquares(11, styles["skeleton-square"])}
        </div>
      </div>
    );
  }
  return null;
};

export default Skeleton;
