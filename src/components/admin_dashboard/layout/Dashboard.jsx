import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useAuth } from "../../context/AuthContext";
import Message from "../message/Message";

// FOR DASHOARD LAYOUT

function Dashboard() {
  const { isOpen } = useAuth();
  return (
    <div className="bg-[#ebf2f3] h-screen w-screen flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div className="flex-1 p-2 overflow-auto">
          <Outlet />
        </div>
      </div>
      {isOpen && <Message />}
    </div>
  );
}

export default Dashboard;
