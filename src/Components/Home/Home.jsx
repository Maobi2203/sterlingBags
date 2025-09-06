import React from "react";
import Homebanner from "./HomeBanner/Homebanner";
import FeaturedCollections from "./Featured Collections/FeaturedCollections";
import NewArrivals from "./New Arrivals/NewArrivals";
import AboutUs from "./About Us/AboutUs";
import Footer from "./Footer/Footer";
import { UserContext } from "../../Context/UserContext";

const Home = () => {
  return (
    <div>
      <Homebanner />
      <FeaturedCollections />
      <NewArrivals />
      <UserContext.Provider value="guest">
        <AboutUs />
      </UserContext.Provider>
    </div>
  );
};

export default Home;
