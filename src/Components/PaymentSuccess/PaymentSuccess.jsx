// src/pages/PaymentSuccess.jsx
import React from "react";
import styles from "./paymentSuccess.module.css";
import { useCart1 } from "../../Cart/CartContext1";
import { useEffect } from "react";
// import axios from "axios"
import axios from "axios";

const PaymentSuccess = () => {
  const { items, clearCart } = useCart1();

  // ✅ Function to format price in NGN
  const formatPrice = (n) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(n);

  // ✅ Calculate total
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    async function sendTelegramMessage() {
      if (items.length > 0) {
        // 1) Your Telegram bot token and chat ID
        // const BOT_TOKEN = 8422362690:AAHhfRESmegBK496xKQElT3Xiw73rAl8riw; // replace with your bot token
        //       TELEGRAM_TOKEN=7935114514:AAFSSQwN_iE4lXrCAjjhgor5f7m15NSpvQ4
        // TELEGRAM_CHAT_ID=7834167895

        // const CHAT_ID = 7834167895; // replace with your chat ID

        // const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
        // const CHAT_ID = import.meta.env.VITE_CHAT_ID;
        const TELEGRAM_TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN;
        const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
        console.log(TELEGRAM_TOKEN, TELEGRAM_CHAT_ID); // just to check if it works
        // const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        // 2) Build order message
        const orderMessage = `✅ Payment Successful
🛒 Order Details:
${items
  .map(
    (i) =>
      `- ${i.name} (ID: ${i.id}) × ${i.quantity} = ${formatPrice(
        i.price * i.quantity
      )}`
  )
  .join("\n")}

💰 Total: ${formatPrice(totalPrice)}`;

        // 3) Send message to Telegram

        // Send message to Telegram
        try {
          await fetch(
            `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: orderMessage,
              }),
            }
          );
          alert("Message sent to Telegram!");
        } catch (error) {
          console.error("Error:", error);
          alert("Failed to send message.");
        }

        //         window.open(
        //           `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=
        //  ${encodeURIComponent(orderMessage)}`,
        //           "_blank"
        //         );

        // try {
        //   const res = await axios.post(
        //     `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        //     {
        //       chat_id: TELEGRAM_CHAT_ID,
        //       text: "Hello!",
        //     }
        //   );

        //   console.log("Message sent:", res.data);
        // } catch (err) {
        //   console.error("Error sending message:", err);
        // }
        // fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     chat_id: TELEGRAM_CHAT_ID,
        //     text: orderMessage,
        //   }),
        // });
        console.log("📲 Telegram alert sent!");
        console.log(TELEGRAM_TOKEN, TELEGRAM_CHAT_ID);

        // 4) Clear cart after sending
        console.log(orderMessage);
        clearCart();
      }
    }
    sendTelegramMessage();
    console.log("📲 Telegram alert sent!");
  }, [items, clearCart, totalPrice]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Payment Received</h1>
        <p className={styles.message}>
          Your order is processing. You will receive updates soon.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
