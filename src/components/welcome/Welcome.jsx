import React from "react";
import Ads from "./Ads";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Welcome() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ads />
      <Footer />
    </div>
  );
}

export default Welcome;
