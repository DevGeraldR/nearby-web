import React, { useState } from "react";

function EditPlace() {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  return (
    <div className="flex h-full w-full justify-center">
      <form className="h-[90%] md:w-[400px] m-auto lg:w-[800px] max-w-[800px] rounded-lg border-solid border-2 border-black p-8 justify-center">
        <h2 className="text-4xl text-[#00df9a] font-bold text-center">
          Edit Place
        </h2>
        <div className="flex flex-col py-2">
          <label>Enter New Name</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Enter New Street</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Enter New City</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Enter New Province</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={province}
            onChange={(event) => setProvince(event.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="w-[200px] my-5 py-2 bg-[#00df9a] text-white font-semibold rounded-lg"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPlace;
