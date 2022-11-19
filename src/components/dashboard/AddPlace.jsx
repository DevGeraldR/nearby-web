import React, { useState } from "react";

function AddPlace() {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex flex-col m-auto">
        <form className="max-w-[400px] w-full mx-auto rounded-lg border-solid border-2 border-black p-8 px-8">
          <h2 className="text-4xl text-[#00df9a] font-bold text-center">
            Add Place
          </h2>
          <div className="flex flex-col py-2">
            <label>Name</label>
            <input
              className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Street</label>
            <input
              className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
              type="text"
              value={street}
              onChange={(event) => setStreet(event.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>City</label>
            <input
              className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Province</label>
            <input
              className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
              type="text"
              value={province}
              onChange={(event) => setProvince(event.target.value)}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="w-full my-5 py-2 bg-[#00df9a] text-white font-semibold rounded-lg"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPlace;
