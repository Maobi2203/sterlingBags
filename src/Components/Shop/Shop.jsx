import styles from "./shop.module.css";
// import { useCart } from "../../Cart/CartContext";
import { useCart } from "../../Cart/CartContext.jsx";
import React, { useState } from "react";
// const { items, addToCart, removeFromCart } = useCart();

// import styles from "./newArrivals.module.css";
const Shop = () => {
  const { addToCart } = useCart();
  const [changeCartBtn, setChangeCartBtn] = useState(true);
  const products = [
    {
      id: 1,
      name: "Elegant bag",
      price: 120,
      img: "/newarrivalls/newarrivalls1.jpg",
      brand: "Gucci",
    },
    {
      id: 2,
      name: "Evening Clutch",
      price: 90,
      img: "/newarrivalls/newarrivalls2.jpg",
      brand: "Dior",
    },
    {
      id: 3,
      name: "Work Satchel",
      price: 150,
      img: "/newarrivalls/newarrivalls3.jpg",
      brand: "Prada",
    },
    {
      id: 4,
      name: "Work Satchel",
      price: 150,
      img: "/newarrivalls/newarrivalls4.jpg",
      brand: "Prada",
    },
    // ... add more with unique ids
  ];

  const formatPrice = (n) =>
    new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD",
    }).format(n);

  const products2 = [
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

  // helper to check presence once per product render
  const isInCart = (id) => items.some((it) => it.id === id);

  // const handleToggleCart = (product) => {
  //   if (isInCart(product.id)) {
  //     removeFromCart(product.id);
  //   } else {
  //     addToCart(product);
  //   }
  // };

  function handleAddTiCart(p) {
    addToCart(p);
  }
  return (
    <section className={styles.bestsellers}>
      <h3>Shop All Bags</h3>
      <p className={styles.writeUp}>
        Fresh styles made for daily wear, easy to pair with any outfit, and
        perfect for on-the-go.
      </p>
      <div className={styles.grid}>
        {products.map((p) => {
          return (
            <div key={p.id} className={styles.card}>
              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p className={styles.price}>{formatPrice(p.price)}</p>
              {/* <button
                className={`${styles.cartBtn} ${inCart ? styles.inCart : ""}`}
                onClick={() => handleToggleCart(p)}
                aria-pressed={inCart}
              >
                {inCart ? "Remove from Cart" : "Add to Cart"}
              </button> */}
              <button onClick={() => handleAddTiCart(p)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
      <button className={styles.shop}>Shop Now</button>
    </section>
  );
  // return (
  //   <section className={styles.bestsellers}>
  //     <h3>Shop All Bags</h3>
  //     <p className={styles.writeUp}>
  //       Fresh styles made for daily wear, easy to pair with any outfit, and
  //       perfect for on-the-go.
  //     </p>
  //     <div className={styles.grid}>
  //       {products.map((p, i) => (
  //         <div key={i} className={styles.card}>
  //           <img src={p.img} alt={p.name} />
  //           <h4>{p.name}</h4>
  //           <p className={styles.price}>{p.price}</p>
  //           <button>Add to Cart</button>
  //         </div>
  //       ))}
  //     </div>
  //     <button className={styles.shop}>Shop Now </button>
  //   </section>
  // );
};

export default Shop;
