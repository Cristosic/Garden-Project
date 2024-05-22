import React, { useEffect, useState } from "react";
import styles from "../Skeleton/Skeleton.module.css";

const Skeleton = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); 

    const animateDots = () => {
      const interval = setInterval(() => {
        setDots((prevDots) => (prevDots === "..." ? "" : prevDots + "."));
      }, 1000); 

      return () => clearInterval(interval);
    };

    animateDots(); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={styles["skeleton-container"]}>
        <h1>
          Products are loading
          {dots} 
        </h1>
        <div className={styles["skeleton-grid"]}>
          {renderSkeletonSquares(11, styles["skeleton-square"])}
        </div>
      </div>
    );
  }
  return null;
};
const renderSkeletonSquares = (count, className) => {
  const squares = [];
  for (let i = 0; i < count; i++) {
    squares.push(<div key={i} className={className}></div>);
  }
  return squares;
};

export default Skeleton;
