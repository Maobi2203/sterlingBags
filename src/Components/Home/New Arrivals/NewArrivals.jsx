import React from "react";
import styles from "./newArrivals.module.css";
import { Link } from "react-router-dom";
const NewArrivals = () => {
  const products = [
    {
      name: "Elegant bag",
      price: "$120",
      img: "../../../../public/newarrivalls/newarrivalls1.jpg",
    },
    {
      name: "Evening Clutch",
      price: "$90",
      img: "../../../../public/newarrivalls/newarrivalls2.jpg",
    },
    {
      name: "Work Satchel",
      price: "$150",
      img: "../../../../public/newarrivalls/newarrivalls3.jpg",
    },
    {
      name: "Work Satchel",
      price: "$150",
      img: "../../../../public/newarrivalls/newarrivalls4.jpg",
    },
  ];
  return (
    <section className={styles.bestsellers}>
      <h3>New Arrivals</h3>
      <p className={styles.writeUp}>
        Check out the newest mini bags just in! Fresh styles made for daily
        wear, easy to pair with any outfit, and perfect for on-the-go.
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
      </div>
      <button className={styles.shop}>
        <Link className={styles.linkBtn} to="/shop">
          Shop Now
        </Link>
      </button>
    </section>
  );
};

export default NewArrivals;
