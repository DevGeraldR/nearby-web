import React from "react";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { logOut } = useAuth();

  async function handleClick() {
    await logOut();
  }

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        className="my-5 py-2 bg-[#00df9a] text-white font-semibold rounded-lg"
      >
        Log Out
      </button>
    </div>
  );
}

export default Dashboard;
