import React from "react";
import Ads from "./Ads";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Pricing from "./Pricing";

function Welcome() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ads />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Welcome;
