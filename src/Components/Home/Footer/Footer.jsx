import React from "react";
import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      <a href="#shop">Shop</a>
      <a href="#wholesale">Wholesale</a>
      <a href="#about">About Us</a>
      <a href="#contact">Contact</a>
    </div>

    <p>© 2025 Sterling Bags Empire</p>
  </footer>
);

export default Footer;
