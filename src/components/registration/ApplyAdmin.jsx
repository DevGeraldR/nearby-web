import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";

function ApplyAdmin() {
  const { currentUser, logOut } = useAuth();
  const [name, setName] = useState(currentUser.displayName);
  const [email, setEmail] = useState(currentUser.email);
  const [contactNumber, setContactNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  //To add the hospital in the database
  const handleClickapplyAdmin = () => {
    //To send the hospital information in our database
    try {
      setDoc(doc(db, "Requesting Admins", email), {
        adminName: name,
        adminEmail: email,
        street: street,
        city: city,
        province: province,
        contactNumber: contactNumber,
      });
      alert("Request Succesfull");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleClickLogOut = async () => {
    await logOut().catch((error) => alert(error));
  };

  return (
    <div className="flex h-full w-full justify-center">
      <form className="md:w-[400px] m-2 lg:w-[800px] max-w-[800px] justify-center">
        <h2 className="text-2xl font-bold text-center">Apply Admin</h2>
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
          <label>Email</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Contact Number</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
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
        <div className="flex gap-2 justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClickapplyAdmin();
            }}
            className="w-[200px] my-5 py-2 bg-[#00dfad] font-semibold rounded-lg"
          >
            Apply
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClickLogOut();
            }}
            className="w-[200px] my-5 py-2 bg-[#00dfad] font-semibold rounded-lg"
          >
            Log Out
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplyAdmin;
