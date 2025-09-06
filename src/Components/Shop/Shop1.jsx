import React from "react";
import styles from "./shop.module.css";
import { useCart1 } from "../../Cart/CartContext1"; // <-- uses your CartContext1

const Shop1 = ({ products }) => {
  // Pull items and actions from your context hook
  const { items, addToCart, removeFromCart } = useCart1();

  const product1 = [
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
  ];

  // const formatPrice = (n) =>
  //   new Intl.NumberFormat(undefined, {
  //     style: "currency",
  //     currency: "USD",
  //   }).format(n);
  const formatPrice = (n) =>
    new Intl.NumberFormat("en-NG", {
      // "en-NG" is English (Nigeria) locale
      style: "currency",
      currency: "NGN", // NGN = Nigerian Naira
    }).format(n);

  // Helper: returns true if an item with `id` exists in the cart.
  // The optional chaining (items?.) prevents crashes if items is temporarily undefined.
  const isInCart = (id) => items?.some((it) => it.id === id);

  return (
    <section className={styles.bestsellers}>
      <h3>Shop All Bags</h3>
      <p className={styles.writeUp}>
        Fresh styles made for daily wear, easy to pair with any outfit, and
        perfect for on-the-go.
      </p>

      <div className={styles.grid}>
        {products.map((p) => {
          const inCart = isInCart(p.id);

          return (
            <div key={p.id} className={styles.card}>
              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p className={styles.price}>{formatPrice(p.price)}</p>

              {/* Toggle behavior: add if not in cart, remove if already in cart */}
              <button
                className={`${styles.cartBtn} ${inCart ? styles.inCart : ""}`}
                onClick={() => (inCart ? removeFromCart(p.id) : addToCart(p))}
                aria-pressed={inCart}
                aria-label={
                  inCart ? `${p.name} — added to cart` : `Add ${p.name} to cart`
                }
              >
                {inCart ? "Remove" : "Add"}
              </button>
            </div>
          );
        })}
      </div>

      <button className={styles.shop}>Shop Now</button>
    </section>
  );
};

export default Shop1;
