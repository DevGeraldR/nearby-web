import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { useAuth } from "../context/AuthContext";
import { AiOutlineClose, AiOutlineMenu, AiOutlineEdit } from "react-icons/ai";
import { DASHBOARD_SIDEBAR_LINKS } from "../lib/constants";

export default function Sidebar() {
  const { logOut } = useAuth();
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleClick = async () => {
    await logOut().catch((error) => alert(error));
  };

  const handleClickSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <div>
      <div className="bg-[#ddead1] h-screen w-60 p-3 md:flex flex-col hidden">
        <div className="flex items-center gap-2 px-1 py-3">
          <h1 className="block w-full text-3xl font-bold text-[#00df9a]">
            NEARBY
          </h1>
        </div>
        <div className="py-8 flex flex-1 flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
          <div
            className={
              "cursor-pointer text-red-500 flex items-center gap-2 font-light px-3 py-2 hover:bg-[#f5f5f5] hover:no-underline active:bg-white rounded-sm text-base"
            }
            onClick={handleClick}
          >
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Logout
          </div>
        </div>
      </div>
      {/* For Phone */}
      <span
        onClick={handleClickSideBar}
        className="block md:hidden p-5 absolute"
      >
        <AiOutlineMenu size={20} />
      </span>

      <div
        className={
          openSideBar
            ? "bg-[#ddead1] h-screen w-60 fixed left-0 top-0 md:hidden flex flex-col ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center gap-2 px-1 py-3">
          <h1 className="block w-full text-3xl font-bold text-[#00df9a]">
            NEARBY
          </h1>
          <div>
            <AiOutlineClose size={20} onClick={handleClickSideBar} />
          </div>
        </div>
        <div
          className="py-8 flex flex-1 flex-col gap-0.5"
          onClick={handleClickSideBar}
        >
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
          <div
            className={
              "cursor-pointer text-red-500 flex items-center gap-2 font-light px-3 py-2 hover:bg-[#f5f5f5] hover:no-underline active:bg-white rounded-sm text-base"
            }
            onClick={handleClick}
          >
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={
        pathname === link.path
          ? " bg-[#f5f5f5] flex items-center gap-2 font-light px-3 py-2 hover:bg-white hover:no-underline active:bg-white rounded-sm text-base"
          : "flex items-center gap-2 font-light px-3 py-2 hover:bg-[#e2e2e2] hover:no-underline active:bg-white rounded-sm text-base"
      }
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
