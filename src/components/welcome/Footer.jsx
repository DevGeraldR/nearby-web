import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">NEARBY</h1>
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-xl sm:text-3xl text-2xl font-bold py-2">
            Get our news letters
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          <input
            className="p-3 flex w-full rounded-md border"
            type="email"
            placeholder="Enter Email"
          />
          <button className="bg-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
            Notify Me
          </button>
        </div>
        <div className="flex md:w-[75%] my-6">
          <FaFacebookSquare size={30} className="ml-2" />
          <FaInstagram size={30} className="ml-2" />
          <FaTwitterSquare size={30} className="ml-2" />
        </div>
      </div>
      <div className="lg:col-span-1 flex justify-between mt-6">
        <div>
          <h6 className="font-medium">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Guides</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium">Contact</h6>
          <ul>
            <li className="py-2 text-sm">+639065730375</li>
            <li className="py-2 text-sm">romerogerald22@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
