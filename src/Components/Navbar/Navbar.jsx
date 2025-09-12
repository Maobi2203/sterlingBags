import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaBars } from "react-icons/fa";
import styles from "./navbar.module.css";
import { useCart1 } from "../../Cart/CartContext1"; // ✅ import cart context
import { useFavorite } from "../../Favorite  context/FavoriteContext";

const Navbar = () => {
  const [toggleMenu, setTogglemenu] = useState(true);
  const [nav, setNav] = useState(true);

  const { items } = useCart1(); // ✅ get items from context
  const { items: favItem } = useFavorite(); // ✅ get items from context
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0); // ✅ total items
  const favCount = favItem.length;
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");

    const handleChange = (e) => {
      if (e.matches) {
        setTogglemenu(true);
        setNav(false);
      } else {
        setTogglemenu(false);
        setNav(true);
      }
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Sterling Bags Empire</h2>

      {toggleMenu && (
        <div className={styles.barIcon} onClick={() => setNav((prev) => !prev)}>
          <FaBars />
        </div>
      )}

      {nav && (
        <div className={styles.navLinks}>
          <ul className={styles.navLink2}>
            <li>
              <Link className={styles.links} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.links} to="/shop">
                Shop
              </Link>
            </li>
            <li className={styles.dropdown}>
              <Link className={styles.links} to="/shop by designer">
                Shop By Designer
              </Link>
            </li>
            <li className={styles.dropdown}>
              <Link className={styles.links} to="/shop by category">
                Shop By Category
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Right side */}
      <div className={styles.navRight}>
        <div>
          <a href="#">About Us</a>
        </div>
        <Link to="/favorite" className={styles.cartWrapper}>
          <FaHeart className={`${styles.navRightIcon} ${styles.bookMark}`} />
          {
            <span className={styles.cartBadge}>{favCount}</span> // ✅ badge
          }
        </Link>

        <Link to="/cart" className={styles.cartWrapper}>
          <FaShoppingCart className={`${styles.navRightIcon} ${styles.cart}`} />
          {
            <span className={styles.cartBadge}>{cartCount}</span> // ✅ badge
          }
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaShoppingCart, FaHeart, FaBars } from "react-icons/fa";
// import styles from "./navbar.module.css";
// import Icofont from "react-icofont";
// // import { products } from "../../Product/Product.js";

// const Navbar = () => {
//   const [toggleMenu, setTogglemenu] = useState(true);
//   // const [bar, setBarIcon] = useState(true);
//   const [nav, setNav] = useState(true);
//   const [displayDesigner, setDisplayDesigner] = useState(false);
//   // choosing designer bag
//   useEffect(() => {
//     // Create a media query
//     const mediaQuery = window.matchMedia("(max-width: 1000px)");
//     // Function to run when screen size changes
//     const handleChange = (e) => {
//       if (e.matches) {
//         console.log("✅ Screen is 1000px or smaller");
//         setTogglemenu(true);
//         setNav(false);
//         // Put your event here
//       } else {
//         console.log("❌ Screen is larger than 1000px");
//         setTogglemenu(false);
//         setNav(true);
//       }
//     };

//     // Run on initial load
//     handleChange(mediaQuery);

//     // Listen for changes
//     mediaQuery.addEventListener("change", handleChange);

//     // Cleanup listener on unmount
//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);
//   return (
//     <>
//       <nav className={styles.navbar}>
//         <h2 className={styles.logo}>Sterling Bags Empire</h2>
//         {toggleMenu && (
//           <div
//             className={styles.barIcon}
//             onClick={() => setNav((prev) => !prev)}
//           >
//             <FaBars />
//           </div>
//         )}

//         {/* nav links */}
//         {nav && (
//           <div className={styles.navLinks}>
//             <ul className={styles.navLink2}>
//               <li>
//                 <Link className={styles.links} to="/">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link className={styles.links} to="/shop">
//                   Shop
//                 </Link>
//               </li>
//               <li className={styles.dropdown}>
//                 <Link
//                   className={styles.links}
//                   to="/shop by designer"
//                   // onMouseEnter={() => setDisplayDesigner(true)}
//                   // onMouseLeave={() => setDisplayDesigner(false)}
//                 >
//                   Shop By designer
//                 </Link>
//                 {/* {displayDesigner && (
//                   <div className={styles.dropdownContent}>
//                     <p>
//                       <a href="">Gucci</a>
//                     </p>
//                     <p>
//                       <a href="">Dior</a>
//                     </p>
//                     <p>
//                       <a href="">Fendi</a>
//                     </p>
//                     <p>
//                       <a href="">Chanel</a>
//                     </p>
//                   </div>
//                 )} */}
//               </li>
//               <li className={styles.dropdown}>
//                 <Link className={styles.links} to="/shop by category">
//                   Shop By Category
//                 </Link>
//                 {/* <div className={styles.dropdownCategory}>
//                   <p>
//                     <a href="">Tote Bag</a>
//                   </p>
//                   <p>
//                     <a href="">Mini Bag</a>
//                   </p>
//                   <p>
//                     <a href="">Big Bag</a>
//                   </p>
//                   <p>
//                     <a href="">Purse</a>
//                   </p>
//                 </div> */}
//               </li>
//             </ul>
//           </div>
//         )}
//         {/* right nav */}
//         <div className={styles.navRight}>
//           <div>
//             <a href="#">About Us</a>
//           </div>
//           <div>{/* <a href="#">Contact Us</a> */}</div>
//           <FaHeart className={`${styles.navRightIcon} ${styles.bookMark}`} />
//           <Link to="/cart">
//             <FaShoppingCart
//               className={`${styles.navRightIcon} ${styles.cart}`}
//             />
//           </Link>
//         </div>
//       </nav>
//     </>
//   );
// };
// export default Navbar;
