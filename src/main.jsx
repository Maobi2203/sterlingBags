import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "../src/assets/css/"
import "././assets/css/icofont.min.css";
import { useState } from "react";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import ShopByDesigner from "./Components/ShopByDesigner/ShopByDesigner.jsx";
import ShopByCategory from "./Components/ShopByCategory/ShopByCategory.jsx";
// import { products } from "../../Product/Product.js";
import { products } from "./Product/Product.js";
import { ImOffice } from "react-icons/im";
import CartPage from "./Components/CartPage/CartPage.jsx";
// import { CartProvider } from "./Cart/CartContext.jsx";
import { CartProvider } from "./Cart/CartContext1.jsx";
import CartPage1 from "./Components/CartPage/CartPage1.jsx";
import Shop1 from "./Components/Shop/Shop1.jsx";
// const [gucci, setGucci] = useState(products);
import CheckoutPage from "./Components/CheckOutPage/CheckOutPage.jsx";
import PaymentSuccess from "./Components/PaymentSuccess/PaymentSuccess.jsx";
import { FavoriteProvider } from "./Favorite  context/FavoriteContext.jsx";
import FavoritePage from "./Components/FavoritePage/FavoritePage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <div>contact us</div> },
      { path: "/shop", element: <Shop1 products={products} /> },
      // { path: "/shop", element: <Shop /> },
      {
        path: "/shop by designer",
        element: <ShopByDesigner products={products} />,
      },
      {
        path: "/shop by category",
        element: <ShopByCategory products={products} />,
      },
      {
        path: "/cart",
        element: <CartPage1 />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "/favorite",
        element: <FavoritePage />,
      },
    ],
  },
  {
    path: "/about",
    element: <div>this is about</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <FavoriteProvider>
        <RouterProvider router={router} />
      </FavoriteProvider>
    </CartProvider>
  </StrictMode>
);
