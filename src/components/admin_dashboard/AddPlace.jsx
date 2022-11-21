import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";

function AddPlace() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const geolocationAPI = navigator.geolocation;
  const { currentUser } = useAuth();
  // For photo: Not implemented yet
  const [photo] = useState("");

  useEffect(() => {
    if (!geolocationAPI) {
      alert("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
        },
        (error) => {
          alert(error);
        }
      );
    }
    if (currentUser) {
      setAdminName(currentUser.displayName);
      setAdminEmail(currentUser.email);
    }
  }, [currentUser, geolocationAPI]);

  //To add the hospital in the database
  const addPlace = () => {
    //To send the hospital information in our database
    try {
      setDoc(doc(db, "Hospitals", currentUser.email), {
        adminName: adminName,
        adminEmail: adminEmail,
        displayName: name,
        street: street,
        city: city,
        province: province,
        contactNumber: contactNumber,
        email: email,
        latitude: lat,
        longitude: long,
        //If the user upload a photo use the photo if not use the default profile picture
        //Not yet implemented
        photoURL:
          photo ||
          "https://cdn.icon-icons.com/icons2/1465/PNG/512/588hospital_100778.png",
      });
      alert("Displayed Succesfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="flex h-full w-full justify-center">
      <form className="md:w-[400px] m-2 lg:w-[800px] max-w-[800px] justify-center">
        <h2 className="text-2xl font-bold text-center">Add Place</h2>
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
        <div className="text-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              addPlace();
            }}
            className="w-[200px] my-5 py-2 bg-[#00dfad] font-semibold rounded-lg"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPlace;
