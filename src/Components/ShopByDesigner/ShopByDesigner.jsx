import React, { useState } from "react";
import styles from "./shopByDesigner.module.css";
import { useCart1 } from "../../Cart/CartContext1";

// ✅ NEW: import heart icon for favorite feature
import { FaHeart } from "react-icons/fa";

// ✅ NEW: import custom Favorite context
// import { useFavorite } from "../../Favorite/FavoriteContext";
import { useFavorite } from "../../Favorite  context/FavoriteContext";

const formatPrice = (n) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN", // NGN = Nigerian Naira
  }).format(n);

const Shop = ({ products }) => {
  const [designer, setDesigner] = useState("All");
  const { items, addToCart, removeFromCart } = useCart1();

  // ✅ NEW: Get favorite items + functions from FavoriteContext
  const { items: favorites, addToFavorite, removeFromFavorite } = useFavorite();

  // Filter products by selected designer
  const filteredProduct =
    designer === "All"
      ? products
      : products.filter((p) => p.brand === designer);

  const isInCart = (id) => items?.some((it) => it.id === id);

  // ✅ NEW: helper function to check if product is already in favorites
  const isFavorite = (id) => favorites?.some((f) => f.id === id);

  return (
    <section className={styles.bestsellers}>
      {/* Designer filter buttons remain unchanged */}
      <button className={styles.designer} onClick={() => setDesigner("All")}>
        All
      </button>
      <button className={styles.designer} onClick={() => setDesigner("Gucci")}>
        Gucci
      </button>
      <button className={styles.designer} onClick={() => setDesigner("Fendi")}>
        Fendi
      </button>
      <button className={styles.designer} onClick={() => setDesigner("Dior")}>
        Dior
      </button>
      <button className={styles.designer} onClick={() => setDesigner("Chanel")}>
        Chanel
      </button>

      <h3>Choose Your Perfect Designer HandBag</h3>
      <p className={styles.writeUp}>
        Fresh styles made for daily wear, easy to pair with any outfit, and
        perfect for on-the-go.
      </p>

      <div className={styles.grid}>
        {filteredProduct.map((p) => {
          const inCart = isInCart(p.id);
          const fav = isFavorite(p.id); // ✅ NEW: check if item is in favorites

          return (
            <div key={p.id} className={styles.card}>
              {/* ✅ NEW: Wrapper added around image so heart can be positioned inside */}
              <div className={styles.imageWrapper}>
                <img src={p.img} alt={p.name} />

                {/* ✅ NEW: Heart icon added for favorite toggle */}
                <FaHeart
                  className={`${styles.heartIcon} ${
                    fav ? styles.favActive : ""
                  }`}
                  onClick={() =>
                    fav ? removeFromFavorite(p.id) : addToFavorite(p)
                  }
                />
              </div>

              <h4>{p.name}</h4>
              <p className={styles.price}>{formatPrice(p.price)}</p>

              {/* Cart button (unchanged) */}
              <button
                className={`${styles.cartBtn} ${inCart ? styles.inCart : ""}`}
                onClick={() => (inCart ? removeFromCart(p.id) : addToCart(p))}
              >
                {inCart ? "Remove" : "Add"}
              </button>
            </div>
          );
        })}
      </div>

      <button className={styles.shop}>Shop Now </button>
    </section>
  );
};

export default Shop;

// import styles from "./shopByDesigner.module.css";
// import { useCart1 } from "../../Cart/CartContext1";
// import { FaHeart } from "react-icons/fa";
// import { useFavorite } from "../../Favorite  context/FavoriteContext";
// // import { products } from "../../Product/Product.js";

// import React, { useState } from "react";
// // import styles from "./newArrivals.module.css";
// const formatPrice = (n) =>
//   new Intl.NumberFormat("en-NG", {
//     // "en-NG" is English (Nigeria) locale
//     style: "currency",
//     currency: "NGN", // NGN = Nigerian Naira
//   }).format(n);
// const Shop = ({ products }) => {
//   const [designer, setDesigner] = useState("All");
//   const { items, addToCart, removeFromCart } = useCart1();
//   // const { items: favorites, addToFavorite, removeFromFavorite } = useFavorite();

//   const filteredProduct =
//     designer === "All"
//       ? products
//       : products.filter((p) => p.brand === designer);
//   const isInCart = (id) => items?.some((it) => it.id === id);

//   return (
//     <section className={styles.bestsellers}>
//       <button className={styles.designer} onClick={() => setDesigner("All")}>
//         All
//       </button>
//       <button className={styles.designer} onClick={() => setDesigner("Gucci")}>
//         Gucci
//       </button>
//       <button className={styles.designer} onClick={() => setDesigner("Fendi")}>
//         Fendi
//       </button>
//       <button className={styles.designer} onClick={() => setDesigner("Dior")}>
//         Dior
//       </button>
//       <button className={styles.designer} onClick={() => setDesigner("Chanel")}>
//         Chanel
//       </button>
//       <h3>Choose Your Perfect Designer HandBag</h3>
//       <p className={styles.writeUp}>
//         Fresh styles made for daily wear, easy to pair with any outfit, and
//         perfect for on-the-go.
//       </p>
//       <div className={styles.grid}>
//         {filteredProduct.map((p, i) => {
//           const inCart = isInCart(p.id);

//           return (
//             <div key={i} className={styles.card}>
//               <img src={p.img} alt={p.name} />
//               <h4>{p.name}</h4>
//               <p className={styles.price}>{formatPrice(p.price)}</p>
//               {/* Toggle behavior: add if not in cart, remove if already in cart */}

//               <button
//                 className={`${styles.cartBtn} ${inCart ? styles.inCart : ""}`}
//                 onClick={() => (inCart ? removeFromCart(p.id) : addToCart(p))}
//                 aria-pressed={inCart}
//                 aria-label={
//                   inCart ? `${p.name} — added to cart` : `Add ${p.name} to cart`
//                 }
//               >
//                 {inCart ? "Remove" : "Add"}
//               </button>
//             </div>
//           );
//         })}
//       </div>
//       <button className={styles.shop}>Shop Now </button>
//     </section>
//   );
// };

// export default Shop;

// // import React, { useState } from "react";
// // import styles from "./shopByDesigner.module.css";

// // const ShopByDesigner = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav className={styles.navbar}>
// //       {/* Logo */}
// //       <div className={styles.logo}>MiniBag</div>

// //       {/* Hamburger icon (mobile) */}
// //       <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
// //         ☰
// //       </div>

// //       {/* Menu Links */}
// //       <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
// //         <li>
// //           <a href="#">Home</a>
// //         </li>
// //         <li>
// //           <a href="#">Shop</a>
// //         </li>
// //         <li className={styles.dropdown}>
// //           <a href="#">Shop by Designer ▾</a>
// //           <ul className={styles.dropdownMenu}>
// //             <li>
// //               <a href="#">Chanel</a>
// //             </li>
// //             <li>
// //               <a href="#">Gucci</a>
// //             </li>
// //             <li>
// //               <a href="#">Prada</a>
// //             </li>
// //             <li>
// //               <a href="#">Louis Vuitton</a>
// //             </li>
// //             <li>
// //               <a href="#">Dior</a>
// //             </li>
// //           </ul>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default ShopByDesigner;
