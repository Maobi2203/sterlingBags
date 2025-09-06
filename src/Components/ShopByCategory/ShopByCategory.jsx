import styles from "./ShopByCategory.module.css";
// import { products } from "../../Product/Product.js";
import { useCart1 } from "../../Cart/CartContext1";
import React, { useState } from "react";
// import styles from "./newArrivals.module.css";
const ShopByCategory = ({ products }) => {
  const { items, addToCart, removeFromCart } = useCart1();

  const [designer, setDesigner] = useState("All");
  const filteredProduct =
    designer === "All"
      ? products
      : products.filter((p) => p.category === designer);
  // Helper: returns true if an item with `id` exists in the cart.
  // The optional chaining (items?.) prevents crashes if items is temporarily undefined.
  const formatPrice = (n) =>
    new Intl.NumberFormat("en-NG", {
      // "en-NG" is English (Nigeria) locale
      style: "currency",
      currency: "NGN", // NGN = Nigerian Naira
    }).format(n);

  const isInCart = (id) => items?.some((it) => it.id === id);
  return (
    <section className={styles.bestsellers}>
      <button className={styles.designer} onClick={() => setDesigner("All")}>
        All
      </button>
      <button
        className={styles.designer}
        onClick={() => setDesigner("MiniBag")}
      >
        Mini Bags
      </button>
      <button
        className={styles.designer}
        onClick={() => setDesigner("ToteBag")}
      >
        Tote Bags
      </button>
      <button className={styles.designer} onClick={() => setDesigner("BigBag")}>
        Big bags
      </button>
      <button className={styles.designer} onClick={() => setDesigner("Purse")}>
        Purse
      </button>
      <h3>Discover Bags That Define Your Style</h3>
      <p className={styles.writeUp}>
        From timeless elegance to modern edge, each piece is crafted to elevate
        your everyday look. Choose the bag that speaks your class and carries
        your story.
      </p>
      <div className={styles.grid}>
        {filteredProduct.map((p, i) => {
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
                {inCart ? "Remove From Cart" : "Add to Cart"}
              </button>
            </div>
          );
          // return (
          //   <div key={i} className={styles.card}>
          //     <img src={p.img} alt={p.name} />
          //     <h4>{p.name}</h4>
          //     <p className={styles.price}>{formatPrice(p.price)}</p>
          //     <button>Add to Cart</button>
          //   </div>
          // );
        })}
      </div>
      <button className={styles.shop}>Shop Now </button>
    </section>
  );
};

export default ShopByCategory;

// import React, { useState } from "react";
// import styles from "./shopByDesigner.module.css";

// const ShopByDesigner = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       {/* Logo */}
//       <div className={styles.logo}>MiniBag</div>

//       {/* Hamburger icon (mobile) */}
//       <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
//         ☰
//       </div>

//       {/* Menu Links */}
//       <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">Shop</a>
//         </li>
//         <li className={styles.dropdown}>
//           <a href="#">Shop by Designer ▾</a>
//           <ul className={styles.dropdownMenu}>
//             <li>
//               <a href="#">Chanel</a>
//             </li>
//             <li>
//               <a href="#">Gucci</a>
//             </li>
//             <li>
//               <a href="#">Prada</a>
//             </li>
//             <li>
//               <a href="#">Louis Vuitton</a>
//             </li>
//             <li>
//               <a href="#">Dior</a>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default ShopByDesigner;
