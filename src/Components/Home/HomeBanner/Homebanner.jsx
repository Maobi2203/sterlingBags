import React, { useState } from "react";
import styles from "./homeBanner.module.css";
import { Link } from "react-router-dom";
const Homebanner = () => {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.body}>
      <div className={styles.main}>
        {/* search Bar */}

        <div className={styles.searchTool}>
          <input
            type="search"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Here..."
          />
        </div>

        <div>
          <h2 className={styles.text1}>Luxury & Style in Every </h2>
          <h1 className={styles.text2}>BAG</h1>
          <p className={styles.writeUp}>
            Wholesale and retail designer handbags for every occasion.
          </p>
        </div>
        <div>
          <button className={styles.btnShop}>
            <Link className={styles.linkBtn} to="/shop">
              Shop Now
            </Link>
          </button>
          <button className={styles.btnCollection}>View Collection</button>
        </div>
      </div>
    </div>
  );
};

export default Homebanner;
