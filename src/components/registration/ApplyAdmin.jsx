import { doc, setDoc } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";

function ApplyAdmin() {
  const { currentUser, logOut } = useAuth();
  const [contactNumber, setContactNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const scroll = useRef(null);
  //To add the hospital in the database
  const handleClickapplyAdmin = async () => {
    //To send the hospital information in our database
    try {
      await setDoc(doc(db, "Requesting Admins", currentUser.email), {
        adminName: currentUser.displayName,
        adminEmail: currentUser.email,
        street: street,
        city: city,
        province: province,
        contactNumber: contactNumber,
      });
      alert("Request Sent Please wait until you got verified");
      setContactNumber("");
      setStreet("");
      setCity("");
      setProvince("");
    } catch (e) {
      alert("Error! Please try again");
    }
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickLogOut = async () => {
    await logOut().catch((error) => alert(error));
  };

  return (
    <div className="flex h-screen w-full justify-center bg-[#ebf2f3]">
      <span ref={scroll}></span>
      <form
        className="md:w-[400px] m-5 lg:w-[800px] w-[300px] max-w-[800px] justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleClickapplyAdmin();
        }}
      >
        <h2 className="text-2xl font-bold text-center">Apply Admin</h2>
        <div className="flex flex-col py-2">
          <label>Contact Number</label>
          <input
            className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
            type="text"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
            required
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
            type="submit"
            className="w-[200px] my-5 py-2 bg-[#00dfad] font-semibold rounded-lg"
          >
            Apply
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClickLogOut();
            }}
            className="w-[200px] my-5 py-2 border border-solid border-black text-[#00dfad] font-semibold rounded-lg"
          >
            Log Out
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplyAdmin;
