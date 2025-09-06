import React, { useState } from "react";
import styles from "./CartPage.module.css";
import { useCart1 } from "../../Cart/CartContext1";
import { useNavigate } from "react-router-dom";
// update the relative path as needed
const CartPage1 = () => {
  const { items, increaseQty, decreaseQty, removeFromCart } = useCart1();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!items.length) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

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

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Elegant Bag",
      brand: "Gucci",
      price: 120,
      img: "/newarrivalls/newarrivalls1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Evening Clutch",
      brand: "Dior",
      price: 90,
      img: "/newarrivalls/newarrivalls2.jpg",
      quantity: 2,
    },
    {
      id: 3,
      name: "Evening Clutch",
      brand: "Dior",
      price: 90,
      img: "/newarrivalls/newarrivalls2.jpg",
      quantity: 2,
    },
  ]);

  const handleQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };
  // const totalPrice = cartItems.reduce(
  // // (sum, item) => sum + item.price * item.quantity,
  // // 0 // );

  return (
    <div className={styles.cartContainer}>
      {" "}
      <h2 className={styles.cartTitle}>Your Shopping Cart</h2>{" "}
      <div className={styles.cartContent}>
        {" "}
        {/* Cart Items */}{" "}
        <div className={styles.cartItems}>
          {" "}
          {items.length === 0 && <p>Your cart is empty.</p>}{" "}
          {items.map((item) => (
            <div className={styles.cartItem} key={item.id}>
              {" "}
              <img
                src={item.img}
                alt={item.name}
                className={styles.cartImg}
              />{" "}
              <div className={styles.cartDetails}>
                {" "}
                <h4>{item.name}</h4>{" "}
                {item.brand && <p className={styles.brand}>{item.brand}</p>}{" "}
                <p className={styles.price}>{formatPrice(item.price)}</p>{" "}
                <div className={styles.quantityControls}>
                  {" "}
                  <button onClick={() => decreaseQty(item.id)}>-</button>{" "}
                  <span>{item.quantity}</span>{" "}
                  <button onClick={() => increaseQty(item.id)}>+</button>{" "}
                </div>{" "}
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  {" "}
                  Remove{" "}
                </button>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* Checkout Summary */}{" "}
        <div className={styles.cartSummary}>
          {" "}
          <h3>Order Summary</h3>{" "}
          <p>Items: {items.reduce((count, it) => count + it.quantity, 0)}</p>{" "}
          <p>
            {" "}
            Total: <strong>{formatPrice(totalPrice)}</strong>{" "}
          </p>{" "}
          <button
            className={styles.checkoutBtn}
            disabled={!items.length}
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
          ;
          {/* <button className={styles.checkoutBtn} disabled={!items.length}>
            {" "}
            Proceed to Checkout{" "}
          </button>{" "} */}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default CartPage1;
