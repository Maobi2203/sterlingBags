import { useState } from "react";
// import "icofont/icofont/css/icofont.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Home/Footer/Footer";
// import Shop from "./Components/Shop/Shop.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      {/* <Shop /> */}
    </>
  );
}

export default App;
