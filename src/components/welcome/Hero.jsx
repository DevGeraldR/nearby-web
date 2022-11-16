import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow your business
        </h1>
        <p className="md:text-2xl text-xl">
          Improve revenue by adding your business in Neaby app. Connect your
          business to the customers
        </p>
        <Link to="/signin">
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
