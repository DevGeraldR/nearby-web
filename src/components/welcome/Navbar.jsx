import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex flex-col bg-[#ebf2f3]">
      <div className="flex w-full justify-between items-center h-20 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold">NEARBY</h1>
        <ul className="hidden md:flex">
          <li>
            <Link
              className="m-4 p-2 border-b border-b-solid border-b-[3px] border-b-[#ebf2f3] hover:border-b-[#00dfad]"
              to="/signup"
            >
              Signup
            </Link>
            <Link
              className="bg-black text-[#00dfad] w-[200px] rounded-full font-medium my-6 mx-auto md:mx-0 hover:bg-[#4a4a4a] py-4 px-8"
              to="/signin"
            >
              Signin
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="md:hidden cursor-pointer pb-1">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full bg-black text-white ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00dfad] m-4">
            NEARBY
          </h1>
          <h1 className="p-5">
            Display your business in nearby app for
            <span className="px-1 text-red-600 font-bold">FREE</span>
          </h1>
          <li className="pt-10">
            <Link
              className="m-4 p-2 border-b border-b-solid border-b-[3px] border-b-black hover:border-b-[#00dfad]"
              to="/signup"
            >
              Signup
            </Link>
            <Link
              className="bg-[#4a4a4a] text-[#00dfad] hover:text-white w-[200px] rounded-full font-medium my-6 mx-auto md:mx-0 hover:bg-[#00dfad] py-4 px-8"
              to="/signin"
            >
              Signin
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:flex flex-row w-full py-2 bg-[#00b7eb] gap-2 hidden">
        <h1 className="ml-10">
          Display your business in nearby app for
          <span className="px-1 text-red-600 font-bold">FREE</span>
        </h1>
        <Link to="/signin">
          <h1 className="border-b border-b-[2px] border-b-black font-bold">
            Get started
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
