import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

// FOR DASHOARD LAYOUT

function Home() {
  return (
    <div className="bg-[#ebf2f3] h-screen w-screen flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div className="flex-1 p-2 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
