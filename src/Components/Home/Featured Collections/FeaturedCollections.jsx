import React from "react";
import styles from "./featuredCollections.module.css";
import { FaShoppingCart, FaHeart, FaBars } from "react-icons/fa";

const FeaturedCollections = () => {
  const products = [
    {
      name: "Elegant bag",
      price: "$120",
      img: "../../../../public/featuredCollections/featuredbag5.jpg.jpg",
    },
    {
      name: "Evening Clutch",
      price: "$90",
      img: "../../../../public/featuredCollections/featuredbag2.jpg.jpg",
    },
    {
      name: "Work Satchel",
      price: "$150",
      img: "../../../../public/featuredCollections/featuredbag3.jpg.jpg",
    },
    {
      name: "Work Satchel",
      price: "$150",
      img: "../../../../public/featuredCollections/featuredbag6.jpg.jpg",
    },
  ];
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Featured Collections</h1>
      {/* <h3 className={styles.subtitle}>
      </h3> */}
      <p className={styles.writeUp}>
        Our featured collection brings you the season’s most loved mini bags.
        Chic designs made to stand out. <br />" Giving your appearance that
        perfect Look "
      </p>

      <div className={styles.grid}>
        {products.map((p, i) => (
          <div key={i} className={styles.card}>
            <img src={p.img} alt={p.name} />
            <h4>{p.name}</h4>
            <p className={styles.price}>{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}

        {/* <div className={styles.container}>
          {/* image container */}
        {/* <div className={styles.imgContainer}> */}
        {/* <img
          src="../../../../public/featuredCollections/featuredbag4.jpg.jpg"
          alt="featuredbag4.jpg"
        /> */}
        {/* </div> */}
        {/* <h4 className={styles.subtitleImg}>Channel</h4> */}
        {/* <div className={styles.subsection}> */}
        {/* <h2>$5,000</h2> */}
        {/* 
        <div className={styles.cartIcon}>
          <FaShoppingCart />
        </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default FeaturedCollections;
