import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ApplyAdmin() {
  const navigate = useNavigate();

  const [validId, setValidId] = useState("");
  const [address, setAddress] = useState("");
  const { currentUser } = useAuth();

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex flex-col m-auto">
        <form className="max-w-[400px] w-full mx-auto rounded-lg border-solid border-2 border-black p-8 px-8">
          <h2 className="text-4xl text-[#00df9a] font-bold text-center">
            Apply Admin
          </h2>
          <div className="flex flex-col py-2">
            <label>Valid ID</label>
            <input
              className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
              type="text"
              value={validId}
              onChange={(event) => setValidId(event.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Address</label>
            <input
              className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="w-full my-5 py-2 bg-[#00df9a] text-white font-semibold rounded-lg"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}
export default ApplyAdmin;
