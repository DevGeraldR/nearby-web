import React from "react";
import Ads from "../welcome/Ads";
import Footer from "../welcome/Footer";
import Hero from "../welcome/Hero";
import Navbar from "../welcome/Navbar";
import Pricing from "../welcome/Pricing";

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
