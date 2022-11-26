import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Logo} alt="/" />
        <div className="flex flex-col justify-center pr-5">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Help customers find your business
          </h1>
          <p>
            Nearby is a navigation app that will help your customers find your
            location. We aim to guide your customers to you.
          </p>
          <Link to="/signin">
            <button className="bg-black text-[#00dfad] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#4a4a4a]">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ads;
