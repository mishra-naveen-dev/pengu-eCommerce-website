import React from "react";
import Hero from "./Hero";
import NewArrivalProducts from "./NewArraival";
import Banner from "./Banner";
import PopularProducts from "./PopularProducts";
import SpacingBanner from "./SpacingBanner";
import BestSeller from "./BestSeller";
import LatestNews from "./LatestNews";

const Home = () => {
  return (
    <>
      <Hero />
      <NewArrivalProducts />
      <Banner />
      <PopularProducts />
      <SpacingBanner />
      <BestSeller />
      <LatestNews />
    </>
  );
};

export default Home;
