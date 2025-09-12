import React, { useState } from "react";
import { useCart1 } from "../../Cart/CartContext1";
import styles from "./checkOutPage.module.css";

const CheckoutPage = () => {
  const { items, clearCart } = useCart1();
  const [paymentMethod, setPaymentMethod] = useState("FlutterWave");

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  console.log("hello");
  const formatPrice = (n) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(n);

  const handlePlaceOrder = () => {
    if (!items.length) {
      alert("Your cart is empty!");
      return;
    }

    alert(
      `Order placed!\nPayment Method: ${paymentMethod}\nTotal: ${formatPrice(
        totalPrice
      )}`
    );

    const phoneNumber = "2347034687590"; // Replace with your WhatsApp number
    const orderMessage = `🛒 New Order Received!\n\nItems:\n${items
      .map(
        (i) =>
          `- ${i.name} × ${i.quantity} = ${formatPrice(i.price * i.quantity)}`
      )
      .join("\n")}\n\nTotal: ${formatPrice(
      totalPrice
    )}\nPayment Method: ${paymentMethod}`;

    // Redirect to Flutterwave
    // window.location.href = "https://sandbox.flutterwave.com/pay/uyxrdzhfw1et";
    // window.location.href = "https://sandbox.flutterwave.com/pay/kjrmoh8nlcnt";
    // window.location.href = "https://sandbox.flutterwave.com/pay/nfjgnfbbllsm";
    window.open(
      "https://sandbox.flutterwave.com/pay/nfjgnfbbllsm",
      "_blank" // this makes it open in a new tab
    );

    // Also open WhatsApp with order details
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderMessage)}`,
      "_blank"
    );

    // clearCart(); // Empty the cart after order
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.title}>Checkout</h2>

      <h3 className={styles.sectionTitle}>Order Summary</h3>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className={styles.orderList}>
          {items.map((item) => (
            <li key={item.id} className={styles.orderItem}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
      )}

      <p className={styles.totalPrice}>Total: {formatPrice(totalPrice)}</p>

      <h3 className={styles.sectionTitle}>Choose Payment Method</h3>
      <div className={styles.paymentOptions}>
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Pay with Flutterwave
        </label>
        <label>
          <input
            disabled={true}
            type="radio"
            value="transfer"
            checked={paymentMethod === "transfer"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Bank Transfer
        </label>
        <label>
          <input
            disabled={true}
            type="radio"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>
      </div>

      <button className={styles.confirmButton} onClick={handlePlaceOrder}>
        Confirm & Pay
      </button>
    </div>
  );
};

export default CheckoutPage;
