import React from "react";
import { FaHeart } from "react-icons/fa";
// import { useFavorite } from "../../Favorite/FavoriteContext";
import { useFavorite } from "../../Favorite  context/FavoriteContext";
// import { useCart1 } from "../../Cart/CartContext1";
import styles from "./favoritePage.module.css";
// import { useCart1 } from "../../Cart/CartContext1";
import { useCart1 } from "../../Cart/CartContext1";
const FavoritePage = () => {
  const { items: favorites, removeFromFavorite } = useFavorite();
  //   const { addToCart } = useCart1();
  const { items, addToCart, removeFromCart } = useCart1();

  if (favorites.length === 0) {
    return <h2 className={styles.empty}>No favorites yet ❤️</h2>;
  }
  const isInCart = (id) => items?.some((it) => it.id === id);
  return (
    <section className={styles.favoritePage}>
      <h2>Your Favorites</h2>
      <div className={styles.grid}>
        {favorites.map((p) => {
          const inCart = isInCart(p.id);

          return (
            <div key={p.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={p.img} alt={p.name} />
                <FaHeart
                  className={`${styles.heartIcon} ${styles.favActive}`}
                  onClick={() => removeFromFavorite(p.id)}
                />
              </div>
              <h4>{p.name}</h4>
              <p className={styles.price}>₦{p.price}</p>
              {/* Cart button (unchanged) */}
              <button
                className={`${styles.cartBtn} ${inCart ? styles.inCart : ""}`}
                onClick={() => (inCart ? removeFromCart(p.id) : addToCart(p))}
              >
                {inCart ? "Remove" : "Add"}
              </button>
              {/* <button className={styles.cartBtn} onClick={() => addToCart(p)}>
              Add to Cart
            </button> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FavoritePage;
